import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import Footer from './components/Footer'
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
    <>
    <Nav/>
    <div className='bg-white dark:bg-gray-900 flex-grow'>
    <Routes>
      <Route path="/" element={<Home dataFunctions={dataFunc} data={data} setData={setData}/>}/>
      <Route path="/favourites" element={<Favourites data={data} setData={setData}/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
