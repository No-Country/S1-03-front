import { SEND_MESSAGE, INPUT_ADD_CHARACTER } from './types'
import { messages } from '../../Utils/chatData'

const INITIAL_STATE = {
  input: '',
  chat: messages
}

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {}
    case INPUT_ADD_CHARACTER:
      return {
        ...state,
        input: action.payload.input
      }
    default:
      return state
  }
}

export default chatReducer
