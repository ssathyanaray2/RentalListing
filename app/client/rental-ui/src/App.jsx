import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListRentals from './components/ListRentals'
import NewRentalForm from './components/NewRentalForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListRentals />} />
        <Route path="/newlisting" element={<NewRentalForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;