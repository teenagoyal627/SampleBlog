import React from 'react'
import "./BlogList.css"
import BlogItems from '../BlogItem/BlogItem'
//blog item is comes in block list.
export default function BlogList({ blogs }) {
  return (
    <div className='blogList-wrap'>
      {blogs.map(blog => <BlogItems
       blog={blog} key={blog.id} />)}

    </div>
  )
}
