import { NextResponse } from "next/server";
import connectToDatabase from "../../lib/mongodb"
import Package from "../../models/Package";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDatabase();
    const packages = await Package.find();
    return NextResponse.json(packages);
  } catch (error) {
    console.error("GET /packages error:", error);
    return NextResponse.json({ error: "Failed to fetch packages" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();

    // Check if package already exists by city name
    const exists = await Package.findOne({ city: body.city });
    if (exists) {
      return NextResponse.json({ error: "Package already exists" }, { status: 400 });
    }

    const newPackage = await Package.create(body);
    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    console.error("POST /packages error:", error);
    return NextResponse.json({ error: "Failed to add package" }, { status: 500 });
  }
}
