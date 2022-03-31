import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Auth from '../Pages/Auth'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'
import PrivateRoute from '../Utils/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route element={<Home />} />
        <Route index element={<PrivateRoute component={<Home />} />} />
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
