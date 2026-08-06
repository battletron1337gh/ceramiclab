import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PREVIEW_TOKEN = "ceramiclab-preview-2026";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|robots.txt|sitemap.xml|coming-soon).*)",
  ],
};

export function middleware(request: NextRequest) {
  // Allow static assets (images, fonts, icons, etc.) to load without preview token
  const pathname = request.nextUrl.pathname;
  const assetExtensions = /\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif|mp4|webm|css|js|woff2?|ttf|otf|eot)$/i;
  if (assetExtensions.test(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get("ceramiclab_preview")?.value;

  if (token === PREVIEW_TOKEN) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  url.searchParams.set("from", pathname);
  return NextResponse.redirect(url);
}
