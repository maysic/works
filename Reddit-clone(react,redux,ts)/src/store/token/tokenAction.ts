import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState, setToken, SET_TOKEN } from "../store";


export interface ISetTokenAction {
  type: typeof SET_TOKEN
  token: string
}

export const SET_TOKEN_ERROR = 'SET_TOKEN_ERROR'

export interface ISetTokenErrorAction {
  type: typeof SET_TOKEN_ERROR
  error: Error
}

export const setTokenError: ActionCreator<ISetTokenErrorAction> = (error: Error) => ({
  type: SET_TOKEN_ERROR,
  error
})

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const urlParams = new URLSearchParams(window.location.search)
  let keyCode = urlParams.get('code')

  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${keyCode}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: { username: process.env.CLIENT_ID ?? '', password: 'vEanr8dMcXfVGvxzWZc6Q_iWJVJwWw'},
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
  )
    .then(({ data }) => {
        dispatch(setToken(data['access_token']))
      }
    )
    .catch((error) => {
      console.log(error)
      dispatch(setTokenError(error))
    })
}


