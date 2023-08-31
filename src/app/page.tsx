'use client'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '../components/top/footer'
import { RootState } from '@/redux/reducers'

export default function Home() {
  const dispatch = useDispatch()
  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  return (
    <>
      <h1 className='text-3xl text-center'>yametara</h1>
      <Link
        href={{
          pathname: '/questions',
          query: { id: '1' },
        }}
      >
        はじめる
      </Link>
      <Footer />
    </>
  )
}
