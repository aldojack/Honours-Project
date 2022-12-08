import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FunctionButton from '../components/FunctionButton'
import ItemsContainer from '../components/ItemsContainer'

export default function home() {
  return (
    <>
        <Nav/>
        <div className='bg-white dark:bg-gray-900 flex-grow'>
          <div className='w-2/3 mx-auto text-center'>
            <Hero/>
            <main>
              <h1 className="text-5xl font-extrabold dark:text-white">Recipe Manager</h1>
              <div className='functions gap-4 grid grid-cols-3 mt-8 mx-auto w-fit'>
                <FunctionButton BtnName="Add new recipe"/>
                <FunctionButton BtnName="Add 100 recipes"/>
                <FunctionButton BtnName="Add 1000 recipes"/>
                <FunctionButton BtnName="Delete all recipes"/>
                <FunctionButton BtnName="Edit all recipes"/>
                <FunctionButton BtnName="Favourite all recipes"/>
              </div>
              <ItemsContainer/>
            </main>   
            <Footer/>
          </div>
        </div>
    </>
  )
}
