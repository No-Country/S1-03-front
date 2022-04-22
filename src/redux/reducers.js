import { combineReducers } from 'redux'
import chat from './chat/reducers'
import friends from './friends/reducers'

const reducers = combineReducers({
  chat,
  friends
})

export default reducers
