import React from 'react'
import "./BlogItem.css"
import {Link} from "react-router-dom"
import Category from '../Category/Category'
const BlogItems = ({blog :
    {
    id,title,category,description,cover,authorAvatar,authorName,createdAt,linkTo
}
}) => {
  return (
    <div className='blogItem-wrap'> 

    <img src={cover} alt="cover" className='blogItem-cover'/>
    <Category label={category}/>
    <h3>{title}</h3>
    <p className='blogItem-desc'>{description}</p>

    <footer>
      <div className='blogItem-author'>
      <img src={authorAvatar} alt='author avatar'/>
      <div>
        <h6>{authorName}</h6>
        <p>{createdAt}</p>

      </div>
      </div>
      <a  className="blogItem-link" href ={linkTo}><span style={{fontSize:"2rem"}}>&#8594;</span></a>
    </footer>
    </div>
  )
}

export default BlogItems
