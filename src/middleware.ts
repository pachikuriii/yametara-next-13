import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.method === 'GET') {
    return NextResponse.redirect(new URL('/questions/1', request.url))
  }
}
export const config = {
  matcher: '/result/:path*',
}
