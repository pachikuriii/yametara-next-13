'use client'
import Q1 from '../../../components/questions/q1'

const Page = ({ params }: { params: { id: string } }) => {
  // if (params === null) {
  //   return <h1>Loading...</h1>
  // }

  return <>{params.id === '1' && <Q1 id={params.id} />}</>
}

export default Page
