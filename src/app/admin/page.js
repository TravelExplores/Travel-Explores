import Link from "next/link";
import AdminPage from "./AdminPage";
import { getAdminFromCookies } from "../lib/auth";
export default async function AdminPageWrapper() { const admin = await getAdminFromCookies(); if (admin) return <AdminPage />; return <div className="flex min-h-screen items-center justify-center bg-[#f7f8fa]"><p className="text-red-500">Unauthorized. Please <Link href="/login" className="underline text-blue-600">login</Link>.</p></div>; }
