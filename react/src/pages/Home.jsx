
import Hero from '../components/Hero'
import FunctionButton from '../components/FunctionButton'
import ItemsContainer from '../components/ItemsContainer'

export default function Home({dataFunctions, data, setData}) {
  return (
    <>
          <div className='w-2/3 mx-auto text-center'>
            <Hero HeroText="Here at Recipe Manager we focus on showing some of the very best recipes and allow you to add your own to share or favourite ones from the many other users."/>
            <main>
              <h1 className="text-5xl font-extrabold dark:text-white">Recipe Manager</h1>
              <div className='functions gap-4 grid grid-cols-2 md:grid-cols-3 mt-8 mx-auto w-fit'>
                <FunctionButton BtnName="Add new recipe" clickHandler={() => setData(prevData => [...prevData, ...dataFunctions.buildData(1)])}/>
                <FunctionButton BtnName="Add 100 recipes" clickHandler={() => setData(prevData => [...prevData, ...dataFunctions.buildData(100)])}/>
                <FunctionButton BtnName="Add 1000 recipes" setData={setData} clickHandler={() => setData(prevData => [...prevData, ...dataFunctions.buildData(1000)])}/>
                <FunctionButton BtnName="Delete all recipes" clickHandler={() => setData(dataFunctions.deleteAll())}/>
                <FunctionButton BtnName="Edit all recipes" clickHandler={() => setData(dataFunctions.updateAll(data))}/>
                <FunctionButton BtnName="Favourite all recipes" clickHandler={() => setData(dataFunctions.favouriteAll(data))}/>
              </div>
              <ItemsContainer data={data} setData={setData} updateHandler={dataFunctions.updateOne}/>
            </main>   
          </div>
    </>
  )
}
