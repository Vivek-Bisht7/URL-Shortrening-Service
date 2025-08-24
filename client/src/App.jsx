import React from 'react'
import Landing_Page from './Pages/Landing_Page'
import {Route,Routes} from 'react-router-dom'
import URL_Changer from './Pages/URL_Changer'
import Check_Visits from './Pages/Check_Visits'

const App = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Landing_Page/>} />
        <Route path="/:shortCode" element={<URL_Changer/>} />
        <Route path="/checkViews" element={<Check_Visits/>} />
    </Routes>
    </div>
  )
}

export default App