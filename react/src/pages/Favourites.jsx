import { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ItemsContainer from '../components/ItemsContainer'

export default function Favourites({data, setData}) {
  const [favourites, setFavourites] = useState(true);
  return (
    <>
      <Nav/>
      <div className='bg-white dark:bg-gray-900 flex-grow'>
        <div className='w-2/3 mx-auto text-center'>
          <Hero HeroText="View all your favourited recipes here, if you have none view our Home for ideas"/>
          <main>
            <h1 className="text-5xl font-extrabold dark:text-white">Favourite Recipes</h1>
            <ItemsContainer data={data} setData={setData} favourites={favourites}/>
          </main>   
        </div>
      </div>
      <Footer/>
    </>
  )
}
