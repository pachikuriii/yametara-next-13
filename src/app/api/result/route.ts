import { NextResponse } from 'next/server'

export function GET(request: Request) {
  return NextResponse.redirect('http://localhost:3000/')
}

export async function POST(request: Request) {
  const response = NextResponse.json({ status: 404 })
  return NextResponse.json({ status: 200 })
}
