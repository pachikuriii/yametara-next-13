import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const FIRST_QUESTION = '1'
const LAST_QUESTION = '8'

interface Props {
  id: string
}
export const TempPrevNextButtons = ({ id }: Props) => {
  const [prevPath, setPrevPath] = useState('')
  const [nextPath, setNextPath] = useState('')
  const [nextLabel, setNextLabel] = useState('次へ')
  const router = useRouter()

  useEffect(() => {
    id === FIRST_QUESTION ? setPrevPath('/') : setPrevPath(`/questions/${Number(id) - 1}`)
    if (id === LAST_QUESTION) {
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
      <p
        className='cursor-pointer'
        onClick={() => {
          router.push(nextPath)
        }}
      >
        {nextLabel}
      </p>
    </>
  )
}
