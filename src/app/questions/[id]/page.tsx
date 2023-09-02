'use client'

import Q1 from '@/components/questions/q1'
import Q2 from '@/components/questions/q2'
import Q3 from '@/components/questions/q3'
import Q4 from '@/components/questions/q4'
import Q5 from '@/components/questions/q5'
import Q6 from '@/components/questions/q6'
import Q7 from '@/components/questions/q7'
import Q8 from '@/components/questions/q8'

const Page = ({ params }: { params: { id: string } }) => {
  if (params === null) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      {params.id === '1' && <Q1 id={params.id} />}
      {params.id === '2' && <Q2 id={params.id} />}
      {params.id === '3' && <Q3 id={params.id} />}
      {params.id === '4' && <Q4 id={params.id} />}
      {params.id === '5' && <Q5 id={params.id} />}
      {params.id === '6' && <Q6 id={params.id} />}
      {params.id === '7' && <Q7 id={params.id} />}
      {params.id === '8' && <Q8 id={params.id} />}
    </>
  )
}

export default Page
