import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FunctionButton from '../components/FunctionButton'
import ItemsContainer from '../components/ItemsContainer'

export default function Home({buildData, deleteData, data, setData}) {
  return (
    <>
        <Nav/>
        <div className='bg-white dark:bg-gray-900 flex-grow'>
          <div className='w-2/3 mx-auto text-center'>
            <Hero/>
            <main>
              <h1 className="text-5xl font-extrabold dark:text-white">Recipe Manager</h1>
              <div className='functions gap-4 grid grid-cols-3 mt-8 mx-auto w-fit'>
                <FunctionButton BtnName="Add new recipe" clickHandler={() => setData(prevData => [...prevData, ...buildData(1)])}/>
                <FunctionButton BtnName="Add 100 recipes" clickHandler={() => setData(prevData => [...prevData, ...buildData(100)])}/>
                <FunctionButton BtnName="Add 1000 recipes" setData={setData} clickHandler={() => setData(buildData(1000))}/>
                <FunctionButton BtnName="Delete all recipes" clickHandler={() => setData(deleteData())}/>
                <FunctionButton BtnName="Edit all recipes"/>
                <FunctionButton BtnName="Favourite all recipes"/>
              </div>
              <ItemsContainer data={data}/>
            </main>   
            <Footer/>
          </div>
        </div>
    </>
  )
}
