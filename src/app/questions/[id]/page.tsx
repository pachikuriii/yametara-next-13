'use client'
import dayjs from 'dayjs'
import { useForm, SubmitHandler } from 'react-hook-form'
import PrevNextButtons from '@/components/questions/prevNextButtons'
type Inputs = {
  retirementDate: string
  retirementReason: 'personal' | 'company' | 'others'
}
const Page = ({ params }: { params: { id: string } }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  interface OPTIONS {
    [key: string]: string
  }
  const OPTIONS: OPTIONS = {
    personal: '自己都合',
    company: '会社都合',
    others: 'その他',
  }
  if (params === null) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1 className='text-2xl text-center'>{params.id}</h1>
      <button className='text-2xl'>{params.id}</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='date' {...register('retirementDate', { required: true })} />
        {errors.retirementDate && <span>This field is required</span>}
        {Object.keys(OPTIONS).map((key) => {
          return (
            <>
              <label>
                <input
                  {...register('retirementReason', {
                    required: '選択してください',
                  })}
                  type='radio'
                  value={key}
                />
                <p>{OPTIONS[key]}</p>
              </label>
            </>
          )
        })}
        <input type='submit' />
      </form>
      <PrevNextButtons id={params.id} />
    </>
  )
}

export default Page
