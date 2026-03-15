import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.decisionlab.today";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host === CANONICAL_HOST) {
    return NextResponse.next();
  }

  // Skip redirect for local development and Vercel system paths
  if (
    host.includes("localhost") ||
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/_vercel")
  ) {
    return NextResponse.next();
  }

  // Redirect all non-canonical hosts (e.g. *.vercel.app) to canonical domain
  const url = new URL(request.url);
  url.hostname = CANONICAL_HOST;
  url.port = "";
  url.protocol = "https:";

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
