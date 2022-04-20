import * as chatActionTypes from './types'

export const sendMessage = (message) => {
  return {
    type: chatActionTypes.SEND_MESSAGE,
    payload: message,
    date: Date.now()
  }
}

export const addCharacterToInput = (char) => {
  return {
    type: chatActionTypes.INPUT_ADD_CHARACTER,
    payload: {
      input: char
    }
  }
}

export const openChat = (username) => {
  return {
    type: chatActionTypes.OPEN_CHAT,
    payload: {
      username
    }
  }
}
