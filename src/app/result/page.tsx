'use client'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/reducers'

const Result = () => {
  const count = useSelector((state: RootState) => state.count)

  return (
    <>
      <p>結果ページ</p>
      {count}
      <Link href='/' className='underline'>
        TOPへ
      </Link>
    </>
  )
}

export default Result
