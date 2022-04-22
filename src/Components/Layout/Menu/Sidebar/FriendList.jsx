import React from 'react'

import User from './User'
import { useSelector } from 'react-redux'

import Container from '../../../Container'

const FriendList = () => {
  const friends = useSelector((state) => state.friends)

  return (
    <>
      <h2>Friends</h2>
      <Container
        fluid
        flex
        direction="column"
        margin="1rem auto"
        gap="1rem"
        overflow="auto">
        {friends?.map((e) => (
          <User
            key={e.id}
            firstname={e.firstname}
            lastname={e.lastname}
            img={e.img}
            email={e.email}
            username={e.username}
          />
        ))}
      </Container>
    </>
  )
}

export default FriendList
