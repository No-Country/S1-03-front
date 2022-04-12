import * as chatActionTypes from '../redux/chat/types'

export const sendMessage = (message) => {
  return {
    type: chatActionTypes.SEND_MESSAGE,
    payload: message,
    date: Date.now()
  }
}
