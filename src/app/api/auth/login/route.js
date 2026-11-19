import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { ADMIN_EMAIL, isAllowedAdmin } from "../../../lib/auth";

export async function POST(req) {
  try {
    const { email, name, password } = await req.json();
    const suppliedEmail = email || name;
    const { ADMIN_PASSWORD, JWT_SECRET } = process.env;
    if (!ADMIN_PASSWORD || !JWT_SECRET) return Response.json({ message: "Admin login is not configured on this server." }, { status: 503 });
    if (!isAllowedAdmin(suppliedEmail) || password !== ADMIN_PASSWORD) return Response.json({ message: `Only the authorized admin email can sign in: ${process.env.ADMIN_EMAIL || ADMIN_EMAIL}` }, { status: 401 });
    const token = jwt.sign({ email: (process.env.ADMIN_EMAIL || ADMIN_EMAIL).toLowerCase() }, JWT_SECRET, { expiresIn: "10y" });
    return Response.json({ message: "Logged in successfully" }, { headers: { "Set-Cookie": serialize("token", token, { httpOnly: true, secure: true, sameSite: "none", maxAge: 60 * 60 * 24 * 365 * 10, path: "/" }) } });
  } catch { return Response.json({ message: "Server error" }, { status: 500 }); }
}
