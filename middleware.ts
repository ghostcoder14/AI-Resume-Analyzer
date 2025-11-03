import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token =
    req.cookies.get("token")?.value || req.headers.get("Authorization");

  const { pathname } = req.nextUrl;

  // ✅ If user is logged in and tries to access "/", send to dashboard
  if (token && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // ✅ If not logged in and trying to access "/dashboard" or its children, send to "/"
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*"], // ✅ watch both routes
};
