import { type NextRequest, NextResponse } from 'next/server';

// Forward the request pathname to server components via `x-pathname`.
// Used by app/layout.tsx to set <html lang> based on locale.
export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images/|public/).*)'],
};
