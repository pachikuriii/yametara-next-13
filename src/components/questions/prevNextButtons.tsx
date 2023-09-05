import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const QUESTION_LENGTH = 8

interface Props {
  onSubmit: () => void
  id: string
  isValid: boolean
}

const PrevNextButtons = ({ onSubmit, id, isValid }: Props) => {
  const [prevPath, setPrevPath] = useState('')
  const [nextPath, setNextPath] = useState('')
  const [nextLabel, setNextLabel] = useState('次へ')
  const router = useRouter()
  const submitHandler = (path: string, onSubmit: any) => {
    onSubmit()
    isValid && router.push(path)
  }

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
      <p className='cursor-pointer' onClick={() => submitHandler(nextPath, onSubmit)}>
        {nextLabel}
      </p>
    </>
  )
}

export default PrevNextButtons
