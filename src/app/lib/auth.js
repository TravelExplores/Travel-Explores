import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const ADMIN_EMAIL = "infotravelexplores@gmail.com";

export function isAllowedAdmin(email) {
  return String(email || "").trim().toLowerCase() === (process.env.ADMIN_EMAIL || ADMIN_EMAIL).trim().toLowerCase();
}

export async function getAdminFromCookies() {
  const token = (await cookies()).get("token")?.value;
  const secret = process.env.JWT_SECRET;
  if (!token || !secret) return null;
  try {
    const admin = jwt.verify(token, secret);
    return isAllowedAdmin(admin.email || admin.name) ? admin : null;
  } catch {
    return null;
  }
}

export async function requireAdmin() {
  const admin = await getAdminFromCookies();
  if (!admin) throw new Error("ADMIN_UNAUTHORIZED");
  return admin;
}
