import Item from './Item'
export default function ItemsContainer({data, setData}) {
  
  function toggleFav(id){

    const toggledItem = data.map(item => {
      if(item.id === id){
        return{...item, isFav: !item.isFav}
      }
      return item
    })
    setData(toggledItem);
  }
  const items = data.length ? data.map((item) => <Item item={item} key={item.id} setData={setData} toggleHandler={toggleFav}/>) : null

  return (
    <div className='items-container bg-gray-800 dark:bg-gray-800 text-white dark:text-black w-96 mx-auto mt-12 p-4 space-y-4'>
      {items || <p className='text-white'>No items to display</p>}
  </div>
  )
}
