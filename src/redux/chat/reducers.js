import { SEND_MESSAGE } from './types'
import { messages } from '../../Utils/chatData'

const INITIAL_STATE = {
  id: 1,
  messages
}

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {}
    default:
      return state
  }
}

export default chatReducer
