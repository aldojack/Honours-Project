import { Heart, Eraser, PencilSimple} from "phosphor-react";

export default function Item({item, toggleHandler}) {

  return (
    <div className='item flex dark:bg-gray-200 bg-gray-100 p-4'>
    <div className='item-data text-start text-black'>
      <div className='item-category flex space-x-2'>
          <p className='bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded p-1 text-sm'>{item.category}</p>
      </div>

        <p className='recipe-name'>Recipe: {item.name}</p>
        <p className='recipe-preptime'>Prep Time: {item.prepTime === 1 ? `${item.prepTime} minute` : `${item.prepTime} minutes`}</p>
        <p className='recipe-preptime'>Cook Time: {item.cookTime === 1 ? `${item.cookTime} minute` : `${item.cookTime} minutes`}</p>
    </div>

    
    <div className='edit-item-container self-center ml-auto'>
      <button className='edit'><PencilSimple size={20} color="#080707" weight="duotone" /></button>
      <button className='delete'><Eraser size={20} color="#080707" weight="duotone" /></button>
      <button className='favourite' onClick={() => toggleHandler(item.id)}>{item.isFav ? <Heart size={20}/> : <Heart size={20} color="#e91c1c" weight="fill" />}</button>
    </div>
  </div>
  )
}
