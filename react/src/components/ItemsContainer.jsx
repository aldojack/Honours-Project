import Item from './Item'
export default function ItemsContainer({data, setData, updateHandler, favourites = false}) {
  let items = null
  function toggleFav(id){

    const toggledItem = data.map(item => {
      if(item.id === id){
        return{...item, isFav: !item.isFav}
      }
      return item
    })
    setData(toggledItem);
  }

  function deleteItem(id){

    const newArray = data.filter(item => {
      return item.id !== id
    })
    setData(newArray);
  }

  function updateItem(id){

    const updatedItem = data.map(item => {
      if(item.id === id){
        return updateHandler(item)
      }
      return item
    })
    setData(updatedItem);
  }
  
  if(favourites){
    items = data.length ? data.filter((item) => item.isFav).map((item) => <Item item={item} key={item.id} setData={setData} toggleHandler={toggleFav} deleteHandler={deleteItem} updateHandler={updateItem}/>) : null
  }
  else{
    items = data.length ? data.map((item) => <Item item={item} key={item.id} setData={setData} toggleHandler={toggleFav} deleteHandler={deleteItem} updateHandler={updateItem}/>) : null
  }


  return (
    <div className='items-container w-full md:w-max bg-gray-800 dark:bg-gray-800 text-white dark:text-black mx-auto mt-12 p-4 space-y-4'>
      {items || <p className='text-white'>No items to display</p>}
  </div>
  )
}
