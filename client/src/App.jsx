import React from 'react'
import Landing_Page from './Pages/Landing_Page'
import {Route,Routes} from 'react-router-dom'
import URL_Changer from './Pages/URL_Changer'

const App = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Landing_Page/>} />
        <Route path="/:shortCode" element={<URL_Changer/>} />
    </Routes>
    </div>
  )
}

export default App