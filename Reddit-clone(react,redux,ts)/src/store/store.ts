import { type } from "os";
import { ActionCreator, AnyAction, Reducer } from "redux";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reduser";
import { ISetTokenAction, ISetTokenErrorAction, SET_TOKEN_ERROR } from "./token/tokenAction";
import { ITokenState, tokenReducer } from "./token/tokenReduser";

export type RootState = {
  commentText: string;
  token: ITokenState
  me: MeState
}

const initialState: RootState = {
  commentText: 'Привет',
  token: {
    token: '',
    error: new Error('')
  },
  me: {
    loading: false,
    error: '',
    data: {}
  },
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT,
  text:string
}

export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
  type: UPDATE_COMMENT,
  text
})

export const SET_TOKEN = 'SET_TOKEN';
type SetTokenAction = {
  type: typeof SET_TOKEN,
  token:string
}
export const setToken: ActionCreator<SetTokenAction> = (token) => ({
  type: SET_TOKEN,
  token,

})

type MyAction = UpdateCommentAction 
  | SetTokenAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction
  | ISetTokenAction
  | ISetTokenErrorAction

export const RootReduser:Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT: 
      return {
        ...state,
        commentText:action.text
      } 
    case SET_TOKEN:
      case SET_TOKEN_ERROR:
        return {
          ...state,
          token: tokenReducer(state.token, action)
        }
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      }
    default: 
      return state
  }

}