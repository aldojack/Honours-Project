import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import * as dataFunc from './data/buildData'

function App() {

  const [data, setData] = useState(() => {
    const initialValue = localStorage.getItem('items')
    
    return initialValue !== null ? JSON.parse(initialValue) : []
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(data))
  },[data]);


  return (
    <Routes>
      <Route path="/" element={<Home dataFunctions={dataFunc} data={data} setData={setData}/>}/>
      <Route path="/favourites" element={<Favourites data={data} setData={setData}/>}/>
    </Routes>
  )
}

export default App
