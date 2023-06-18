import React from 'react'
import "./Category.css"
const Category = ({label}) => {
  return (
    <div>
      <p className='chip'>{label}</p>
    </div>
  )
}

export default Category
