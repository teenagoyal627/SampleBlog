import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Dummy from '../Home/Blogs/DummyBlogs';
import EmptyList from '../Home/EmptyList/EmptyList';
import Category from '../Home/Blogs/Category/Category';
import './DetailBlog.css'

const DetailBlog = () => {
    const {id}=useParams();
    const [blog,setBlog]=useState(null)
    useEffect(()=>{
        let blog=Dummy.find((blog)=>blog.id===parseInt(id))

        if(blog){
            setBlog(blog);
        }
    },[id]);
  return (
    <div>
      <Link to='/' className='blog-goBack'><span>&#8592;</span>Go Back</Link>
      {blog ?(<div className='blog-wrap'>
        <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            {/* <div className='blog-subcategory'>
                {blog.subCategory.map((category,index)=>(
                    <div key={index}>
                        <Category label={category}/>
                    </div>
                ))}
            </div> */}
            
        </header>
        <img src={blog.cover} alt='cover'/>
        <p className='blog-desc'>{blog.description}</p>
      </div>):
       
      (<EmptyList/>)
      }
    </div>
  )
}

export default DetailBlog
