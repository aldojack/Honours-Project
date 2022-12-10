import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import {buildData} from './data/buildData'

function App() {

  const [data, setData] = useState(() => {
    const initialValue = localStorage.getItem('items')
    
    return initialValue !== null ? JSON.parse(initialValue) : []
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(data))
  },[data]);


  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home buildData={buildData} data={data} setData={setData}/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
