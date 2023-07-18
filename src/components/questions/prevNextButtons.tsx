import Link from 'next/link'
import { useEffect, useState } from 'react'

const QUESTION_LENGTH = 8

const PrevNextButtons = ({ id }: { id: string }, onSubmit: any) => {
  const [prevPath, setPrevPath] = useState('')
  const [nextPath, setNextPath] = useState('')

  useEffect(() => {
    id === '1' ? setPrevPath('/') : setPrevPath(`/questions/${Number(id) - 1}`)
    id === String(QUESTION_LENGTH)
      ? setNextPath('/result')
      : setNextPath(`/questions/${Number(id) + 1}`)
  }, [id])

  return (
    <>
      <Link href={prevPath}>戻る</Link>
      <Link href={nextPath}>次へ</Link>
    </>
  )
}

export default PrevNextButtons
