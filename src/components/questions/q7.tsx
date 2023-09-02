'use client'
import { TempPrevNextButtons } from './TempPrevNextButtons'

const Q7 = (params: { id: string }) => {
  return (
    <>
      <p>{params.id}</p>
      <TempPrevNextButtons id={params.id} />
    </>
  )
}

export default Q7
