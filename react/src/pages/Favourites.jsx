import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import ItemsContainer from '../components/ItemsContainer'

export default function Favourites({data, setData}) {
  const [favourites, setFavourites] = useState(data.filter((item) => item.isFav));

  useEffect(() => {
    if(favourites.length)
    {
      setFavourites(data.filter((item) => item.isFav))
    }
    else{
      setFavourites([])
    }
  },[data])
  return (
    <>
        <div className='w-2/3 mx-auto text-center'>
          <Hero HeroText="View all your favourited recipes here, if you have none view our Home for ideas"/>
          <main>
            <h1 className="text-5xl font-extrabold dark:text-white">Favourite Recipes</h1>
            <ItemsContainer data={favourites} setData={setData}/>
          </main>   
        </div>
    </>
  )
}
