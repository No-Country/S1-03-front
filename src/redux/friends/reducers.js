const INITIAL_STATE = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
    email: 'john@doe.com',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, saepe!',
    username: 'idk54845'
  },
  {
    id: 2,
    firstname: 'Johny',
    lastname: 'Doelin',
    img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
    email: 'johny@doelin.com',
    message: undefined,
    username: 'idk548asdf'
  }
]
const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '':
      return {}
    default:
      return state
  }
}

export default chatReducer
