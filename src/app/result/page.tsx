import Link from 'next/link'
import Footer from '@/components/footer'

const Result = () => {
  return (
    <>
      <p>結果ページ</p>
      <Link href='/' className='underline'>
        TOPへ
      </Link>
    </>
  )
}

export default Result
