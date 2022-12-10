import React from 'react'

export default function Item({item}) {
  return (
    <div className='item flex dark:bg-gray-200 bg-gray-800 p-4'>
    <div className='item-data text-start'>
      <div className='item-category flex space-x-2'>
          <p className='bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded p-1 text-sm'>{item.category}</p>
      </div>

        <p className='recipe-name'>Recipe: {item.name}</p>
        <p className='recipe-preptime'>Prep Time: {item.prepTime === 1 ? `${item.prepTime} minute` : `${item.prepTime} minutes`}</p>
        <p className='recipe-preptime'>Cook Time: {item.cookTime === 1 ? `${item.cookTime} minute` : `${item.cookTime} minutes`}</p>
    </div>

    
    <div className='edit-item-container self-center ml-auto'>
      <i className='edit'>🖊</i>
      <i className='delete'>✖</i>
      <i className='favourite'>🤍</i>
    </div>
  </div>
  )
}
