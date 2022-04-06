import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout'

import Providers from '../context'
import Auth from '../Pages/Auth'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'
import GlobalStyles from '../Utils/globalStyles'
import PrivateRoute from '../Utils/PrivateRoute'

function App() {
  return (
    <Providers>
      <GlobalStyles />
      <BrowserRouter>
        <Routes path="/">
          <Route element={<Home />} />
          <Route index element={<PrivateRoute component={<Layout> <Home /> </Layout>}/>}/>
          <Route path="auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  )
}

export default App
