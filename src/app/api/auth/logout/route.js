import { serialize } from "cookie";

export async function POST(req) {
  return new Response(JSON.stringify({ message: "Logged out" }), {
    status: 200,
    headers: {
      "Set-Cookie": serialize("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: new Date(0), // expire immediately
        path: "/",
      }),
      "Content-Type": "application/json",
    },
  });
}
