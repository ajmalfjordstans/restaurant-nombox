import React from 'react'
import CardOne from './cards/card-one'
import CardFour from './cards/card-four'
import CardTwo from './cards/card-two'
import CardThree from './cards/card-three'

const radioInputOne = ['Hide all order', 'Items comments', "Restaurant price modifier"]
const radioInputTwo = ['Discount', 'Order Alert', "Open Drawer"]
const incrementInput = [
  {
    name: "Menu button font size",
    count: 20
  },
  {
    name: "Menu button height",
    count: 15
  },
  {
    name: "Genral button font size",
    count: 15
  },
]

export default function General() {
  return (
    <div className='font-[700]'>
      <p>Miscellaneous</p>
      <div className='grid md:grid-cols-2 mt-4 gap-3'>
        <CardOne data={radioInputOne} />
        <CardTwo />
        <CardThree data={incrementInput}/>
        <CardOne data={radioInputTwo} />
      </div>
    </div>
  )
}
