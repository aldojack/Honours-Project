import React from 'react'

export default function Item() {
  return (
    <div className='item flex dark:bg-gray-200 bg-gray-800 p-4'>
    <div className='item-data text-start'>
    <ul className='item-category flex space-x-2'>
        <li className='bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded p-1 text-sm'>Breakfast</li>
    </ul>
    {/* <ol className='text-sm list-decimal'>
      <li>Season the beaten eggs well with salt and pepper. Heat the oil and butter in a non-stick frying pan over a medium-low heat until the butter has melted and is foaming.</li>
      <li>Pour the eggs into the pan, tilt the pan ever so slightly from one side to another to allow the eggs to swirl and cover the surface of the pan completely. Let the mixture cook for about 20 seconds then scrape a line through the middle with a spatula</li>
      <li>Tilt the pan again to allow it to fill back up with the runny egg. Repeat once or twice more until the egg has just set.</li>
      <li>At this point you can fill the omelette with whatever you like – some grated cheese, sliced ham, fresh herbs, sautéed mushrooms or smoked salmon all work well. Scatter the filling over the top of the omelette and fold gently in half with the spatula. Slide onto a plate to serve.</li>

    </ol> */}
      <p className='recipe-name'>Recipe: Omelette</p>
      <p className='recipe-preptime'>Prep Time: 1 minute</p>
      <p className='recipe-cooktime'>Cook Time Time: 4 minutes</p>
    </div>

    
    <div className='edit-item-container self-center ml-auto'>
      <i className='edit'>🖊</i>
      <i className='delete'>✖</i>
      <i className='favourite'>🤍</i>
    </div>
  </div>
  )
}
