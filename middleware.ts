import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Redirect /consultation to /contact
  if (request.nextUrl.pathname.startsWith("/consultation")) {
    return NextResponse.redirect(new URL("/contact", request.url))
  }

  // Redirect /faqs to /
  if (request.nextUrl.pathname.startsWith("/faqs")) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/consultation/:path*", "/faqs/:path*"],
}
