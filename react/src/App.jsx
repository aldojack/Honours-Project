import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import {buildData, deleteData, favouriteAll} from './data/buildData'

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
      <Route path="/" element={<Home buildData={buildData} favouriteAll={favouriteAll} deleteData={deleteData} data={data} setData={setData}/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
    </Routes>
  )
}

export default App
