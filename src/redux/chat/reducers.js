import { SEND_MESSAGE, INPUT_ADD_CHARACTER, OPEN_CHAT } from './types'
import { messages } from '../../Utils/chatData'

const INITIAL_STATE = {
  input: '',
  chat: messages,
  current: '',
  initializedChats: {
    idk54845: messages
  }
}

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state }
    case INPUT_ADD_CHARACTER:
      return {
        ...state,
        input: action.payload.input
      }
    case OPEN_CHAT:
      return {
        ...state,
        current: action.payload.username,
        initializedChats: {
          [action.payload.username]:
            state.initializedChats[action.payload.username] || []
        }
      }
    default:
      return state
  }
}

export default chatReducer
