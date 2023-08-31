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
  const router = useRouter()
  const submitHandler = (path: string, onSubmit: any) => {
    onSubmit()
    isValid && router.push(path)
  }

  useEffect(() => {
    id === '1' ? setPrevPath('/') : setPrevPath(`/questions/${Number(id) - 1}`)
    id === String(QUESTION_LENGTH)
      ? setNextPath('/result')
      : setNextPath(`/questions/${Number(id) + 1}`)
  }, [id])

  return (
    <>
      <p onClick={() => router.push(prevPath)}>戻る</p>
      <p onClick={() => submitHandler(nextPath, onSubmit)}>次へ</p>
    </>
  )
}

export default PrevNextButtons
