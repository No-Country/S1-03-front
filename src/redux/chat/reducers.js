import { SEND_MESSAGE, INPUT_ADD_CHARACTER, OPEN_CHAT } from './types'
import { messages } from '../../Utils/chatData'

const INITIAL_STATE = {
  input: '',
  current: '',
  initializedChats: {
    idk54845: messages
  }
}

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        initializedChats: {
          [state.current]: [
            ...state.initializedChats[state.current],
            action.payload.message
          ]
        }
      }
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
          ...state.initializedChats,
          [action.payload.username]:
            state.initializedChats[action.payload.username] || []
        }
      }
    default:
      return state
  }
}

export default chatReducer
