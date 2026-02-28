import { NextResponse } from "next/server";

export function GET(request: Request) {
  const url = new URL("/icon.png?v=20260228", request.url);
  return NextResponse.redirect(url, 307);
}
