import { useRouter } from 'next/navigation'
import next from 'next/types'
import { useEffect, useState } from 'react'

const QUESTION_LENGTH = 8

interface Props {
  id: string
}
export const TempPrevNextButtons = ({ id }: Props) => {
  const [prevPath, setPrevPath] = useState('')
  const [nextPath, setNextPath] = useState('')
  const [nextLabel, setNextLabel] = useState('次へ')
  const router = useRouter()

  useEffect(() => {
    id === '1' ? setPrevPath('/') : setPrevPath(`/questions/${Number(id) - 1}`)
    if (id === String(QUESTION_LENGTH)) {
      setNextLabel('結果を見る')
      setNextPath('/result')
    } else {
      setNextPath(`/questions/${Number(id) + 1}`)
    }
  }, [id])

  return (
    <>
      <p className='cursor-pointer' onClick={() => router.push(prevPath)}>
        戻る
      </p>
      <p className='cursor-pointer' onClick={() => router.push(nextPath)}>
        {nextLabel}
      </p>
    </>
  )
}
