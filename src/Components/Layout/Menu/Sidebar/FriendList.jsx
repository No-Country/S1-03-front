import React from 'react'

import User from './User'
import Container from '../../../Container'
const FriendList = () => {
  const friends = [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
      email: 'john@doe.com'
    },
    {
      id: 2,
      firstname: 'John',
      lastname: 'Doe',
      img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
      email: 'john@doe.com'
    },
    {
      id: 3,
      firstname: 'John',
      lastname: 'Doe',
      img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
      email: 'john@doe.com'
    }
  ]
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
          />
        ))}
      </Container>
    </>
  )
}

export default FriendList
