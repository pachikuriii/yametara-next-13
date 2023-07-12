'use client'

import { useSelector, useDispatch } from 'react-redux'
import PrevNextButtons from '@/components/questions/prevNextButtons'
import { RootState } from '@/redux/reducers'
const Page = ({ params }: { params: { id: string } }) => {
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  if (params === null) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1 className='text-2xl text-center'>{params.id}</h1>

      <button onClick={increment}>aaa</button>

      <PrevNextButtons id={params.id} />
    </>
  )
}

export default Page
