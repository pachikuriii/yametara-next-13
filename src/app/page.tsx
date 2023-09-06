'use client'

import { useSelector, useDispatch } from 'react-redux'
import Footer from '@/components/top/footer'
import { RootState } from '@/redux/reducers'

async function getData() {
  await fetch('http://localhost:3000/api', { method: 'POST' })
}

export default function Home() {
  const dispatch = useDispatch()
  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  return (
    <>
      <h1 className='text-3xl text-center'>yametara</h1>
      <p onClick={getData}>はじめる</p>
      <Footer />
    </>
  )
}
