import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.redirect('http://localhost:3000/questions/1')
}
