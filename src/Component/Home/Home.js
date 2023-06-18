import React, { useState } from 'react'
import Search from './Search/Search'
import BlogList from './Blogs/BlogList/BlogList'
import Dummy from './Blogs/DummyBlogs'
import EmptyList from './EmptyList/EmptyList'
import BlogNav from '../Navbar/BlogNavj'
 

const Home = () => {

  const [blogs,setBlogs]=useState(Dummy);
  const[searchKey,setSearchKey]=useState('')

  const SearchSubmitHandler =(event)=>{  //fro from submit
    event.preventDefault();
     SearchResultHandler();
     console.log(SearchResultHandler())

  }
  //search blogs by category
  const SearchResultHandler=()=>{
    const allblogs=Dummy;
    //  console.log(allblogs)
    const filterBlogs=allblogs.filter((blog)=>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );console.log(filterBlogs)
    setBlogs(filterBlogs);
  }

  const ClearSearchHandler =()=>{
       setBlogs(Dummy);
       setSearchKey('');
  }


  return (
    <div>
    <BlogNav/>
    
         {/* <BlogNav/> */}
         <Search 
          value={searchKey} 
          ClearSearch={ClearSearchHandler}
          FormSubmit={SearchSubmitHandler} 
          SearchHandler={(e)=>{setSearchKey(e.target.value)}}></Search>
        {!blogs.length ? <EmptyList/>:<BlogList blogs={blogs}/>} 
                  {/* <h3 style={{marginBottom:"0px",padding:"0rem"}}>Most Recent Blogs</h3> */}

    </div>
  )
}

export default Home
