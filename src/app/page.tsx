'use client'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '@/components/top/footer'
import { RootState } from '@/redux/reducers'

export default function Home() {
  const count = useSelector((state: RootState) => state.count)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const saveToSessionStorage = () => {
    sessionStorage.setItem('yametara', count.toString())
  }

  return (
    <>
      <h1 className='text-3xl text-center'>yametara</h1>

      <Link href='/questions/1'>はじめる</Link>

      <button onClick={increment}>aaa</button>
      <button onClick={saveToSessionStorage}>bbb</button>
      <Footer />
    </>
  )
}
