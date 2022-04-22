import React from 'react'
import { useSelector } from 'react-redux'
import Chat from '../Components/Chat/'

const Home = () => {
  const current = useSelector((state) => state.chat.current)
  return current ? <Chat /> : <></>
}

export default Home
