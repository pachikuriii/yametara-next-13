'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import PrevNextButtons from './prevNextButtons'

type Inputs = {
  retirementDate: string
  retirementReason: 'personal' | 'company' | 'others'
}
const Q1 = (params: { id: string }) => {
  const dispatch = useDispatch()
  const submit = (data: Inputs) => {
    const payload = { retirementDate: data.retirementDate, retirementReason: data.retirementReason }
    dispatch({ type: 'SUBMIT', payload })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    submit(data)
  }

  interface OPTIONS {
    [key: string]: string
  }
  const OPTIONS: OPTIONS = {
    personal: '自己都合',
    company: '会社都合',
    others: 'その他',
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='date' {...register('retirementDate', { required: true })} />
        {errors.retirementDate && <span>選択してください</span>}
        <br />
        {Object.keys(OPTIONS).map((key) => {
          return (
            <>
              <label>
                <input
                  {...register('retirementReason', { required: true })}
                  type='radio'
                  value={key}
                />

                <p>{OPTIONS[key]}</p>
              </label>
            </>
          )
        })}
        {errors.retirementReason && <span>選択してください</span>}
        <input type='submit' />
        <PrevNextButtons id={params.id} />
      </form>
    </>
  )
}

export default Q1
