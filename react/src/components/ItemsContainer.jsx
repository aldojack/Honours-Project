import React from 'react'
import Item from './Item'
export default function ItemsContainer() {
  return (
    <div className='items-container bg-gray-200 dark:bg-gray-800 text-white dark:text-black w-96 mx-auto mt-12 p-4 space-y-4'>
    <Item/>

    <div className='item flex dark:bg-gray-200 bg-gray-800 p-4'>
      <div className='item-data text-start'>
      <ul className='item-category flex space-x-2'>
          <li className='bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded p-1 text-sm'>Lunch</li>
      </ul>

        <p className='recipe-name'>Recipe: Chicken Cesar Salad</p>
        <p className='recipe-preptime'>Prep Time: 1 minute</p>
        <p className='recipe-cooktime'>Cook Time Time: 6 minutes</p>
      </div>

      
      <div className='edit-item-container self-center ml-auto'>
        <i className='edit'>🖊</i>
        <i className='delete'>✖</i>
        <i className='favourite'>🤍</i>
      </div>
    </div>
  </div>
  )
}
