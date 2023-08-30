'use client'
import ProgressBar from '@ramonak/react-progress-bar'
import { usePathname } from 'next/navigation'
import { useState, useMemo } from 'react'

export const ProgressIndicator = () => {
  const questionNumber = usePathname().split('/').pop()
  const [state, setState] = useState(Number(questionNumber))

  useMemo(() => {
    setState(Number(questionNumber))
  }, [questionNumber])

  return (
    <ProgressBar
      completed={state}
      bgColor='#CF597D'
      baseBgColor='#D4E3E1'
      height='0.6rem'
      isLabelVisible={false}
      transitionDuration='0.2s'
      transitionTimingFunction='ease-out'
      maxCompleted={8}
      className='w-full mx-auto pt-5 pb-1'
    />
  )
}
