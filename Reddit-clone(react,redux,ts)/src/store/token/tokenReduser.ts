import { Reducer } from "react"
import { SET_TOKEN } from "../store"
import { ISetTokenAction, ISetTokenErrorAction, SET_TOKEN_ERROR } from "./tokenAction"

export interface ITokenState {
  token: string
  error: Error
}

type ITokenActions = ISetTokenAction | ISetTokenErrorAction

export const tokenReducer: Reducer<ITokenState, ITokenActions> = (state, action) => {

  switch (action.type) {

    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      }

    case SET_TOKEN_ERROR:
      return {
        ...state,
        error: action.error,
      }

    default:
      return state
  }
}

export { SET_TOKEN_ERROR }
