import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../../../Container'
import User from './User'

const Chatlist = () => {
  const friends = useSelector((state) => state.friends)

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
        {friends
          ?.filter((e) => e.message !== undefined)
          .map((user) => (
            <User
              key={user.id}
              img={user.img}
              firstname={user.firstname}
              lastname={user.lastname}
              message={user.message}
              username={user.username}
            />
          ))}
      </Container>
    </>
  )
}

export default Chatlist
