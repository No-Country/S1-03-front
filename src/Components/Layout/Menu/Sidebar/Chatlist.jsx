import React from 'react'
import Container from '../../../Container'
import User from './User'

const Chatlist = () => {
  const users = [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, saepe!'
    },
    {
      id: 2,
      firstname: 'John',
      lastname: 'Doe',
      img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, saepe!'
    },
    {
      id: 3,
      firstname: 'John',
      lastname: 'Doe',
      img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, saepe!'
    }
  ]
  return (
    <>
      <h2>Chats</h2>
      <Container
        fluid
        flex
        direction="column"
        margin="1rem auto"
        gap="1rem"
        overflow="auto">
        {users?.map((user) => (
          <User
            key={user.id}
            img={user.img}
            firstname={user.firstname}
            lastname={user.lastname}
            message={user.message}
          />
        ))}
      </Container>
    </>
  )
}

export default Chatlist
