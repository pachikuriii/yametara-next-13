import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import PrevNextButtons from './prevNextButtons'

type Inputs = {
  retirementDate: string
  retirementReason: 'personal' | 'company' | 'others'
}
const Q1 = (params: { id: string }) => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const payload = { retirementDate: data.retirementDate, retirementReason: data.retirementReason }
    dispatch({ type: 'SUBMIT', payload })
  }

  const OPTIONS: Record<string, string> = {
    personal: '自己都合',
    company: '会社都合',
    others: 'その他',
  } as const

  return (
    <>
      <form>
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

        <PrevNextButtons id={params.id} onSubmit={handleSubmit(onSubmit)} isValid={isValid} />
      </form>
    </>
  )
}

export default Q1
