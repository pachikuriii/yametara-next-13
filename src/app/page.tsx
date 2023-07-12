'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className='text-3xl text-center'>yametara</h1>

      <Link href='/questions/1'>はじめる</Link>
    </>
  )
}
