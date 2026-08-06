import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PREVIEW_TOKEN = "ceramiclab-preview-2026";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|coming-soon).*)",
  ],
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get("ceramiclab_preview")?.value;

  if (token === PREVIEW_TOKEN) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  url.searchParams.set("from", request.nextUrl.pathname);
  return NextResponse.redirect(url);
}
