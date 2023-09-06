import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  console.log('GET!!')
  return NextResponse.error()
}

export async function POST(request: NextRequest) {
  console.log('POST!!')
  return NextResponse.redirect(new URL('/questions/1', request.url))
}
