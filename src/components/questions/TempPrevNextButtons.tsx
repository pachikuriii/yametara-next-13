import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const QUESTION_LENGTH = 8

interface Props {
  id: string
}
export const TempPrevNextButtons = ({ id }: Props) => {
  const [prevPath, setPrevPath] = useState('')
  const [nextPath, setNextPath] = useState('')
  const router = useRouter()

  useEffect(() => {
    id === '1' ? setPrevPath('/') : setPrevPath(`/questions/${Number(id) - 1}`)
    id === String(QUESTION_LENGTH)
      ? setNextPath('/result')
      : setNextPath(`/questions/${Number(id) + 1}`)
  }, [id])

  return (
    <>
      <p className='cursor-pointer' onClick={() => router.push(prevPath)}>
        戻る
      </p>
      <p className='cursor-pointer' onClick={() => router.push(nextPath)}>
        次へ
      </p>
    </>
  )
}
