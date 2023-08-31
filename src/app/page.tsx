'use client'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '@/components/top/footer'
import { RootState } from '@/redux/reducers'

export default function Home() {
  const dispatch = useDispatch()
  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const router = useRouter()
  return (
    <>
      <h1 className='text-3xl text-center'>yametara</h1>

      <button onClick={() => router.push('/questions/1')}>はじめる</button>
      <Footer />
    </>
  )
}
