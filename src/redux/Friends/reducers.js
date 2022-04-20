const INITIAL_STATE = []
const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '':
      return {}
    default:
      return state
  }
}

export default chatReducer
