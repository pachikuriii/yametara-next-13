'use client'
import PrevNextButtons from '@/components/questions/prevNextButtons'

const Page = ({ params }: { params: { id: string } }) => {
  if (params === null) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1 className='text-2xl text-center'>{params.id}</h1>
      <button className='text-2xl'>{params.id}</button>
      <PrevNextButtons id={params.id} />
    </>
  )
}

export default Page
