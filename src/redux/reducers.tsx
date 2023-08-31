import { combineReducers } from 'redux'

const retirementDateReducer = (state = '', action: any) => {
  switch (action.type) {
    case 'SUBMIT':
      return action.payload.retirementDate
    default:
      return state
  }
}

const retirementReasonReducer = (state = '', action: any) => {
  switch (action.type) {
    case 'SUBMIT':
      return action.payload.retirementReason
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  retirementDate: retirementDateReducer,
  retirementReason: retirementReasonReducer,
})

export type RootState = ReturnType<typeof rootReducer>
