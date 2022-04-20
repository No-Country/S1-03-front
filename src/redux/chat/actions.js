import * as chatActionTypes from './types'

export const sendMessage = (message) => {
  return {
    type: chatActionTypes.SEND_MESSAGE,
    payload: {
      message: {
        date: new Date().toLocaleDateString(),
        id: Math.floor(Math.random() * (9999999 - 0 + 1) + 0),
        sender: 2,
        content: message
      }
    }
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
