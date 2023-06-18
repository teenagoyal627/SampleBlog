import React from 'react'
import './Search.css'



const Search = ({value,SearchHandler,ClearSearch,FormSubmit}) => {
  return (
    <div className='searchBar-wrap'>
    <form onSubmit={FormSubmit}>
      <input
       type='text'
        placeholder='Search By Category'
         value={value} 
         onChange={SearchHandler}/>

         {value && <span onClick={ClearSearch}>X</span> }
         <button>Go</button>
    </form>
      
          </div>
  )
}

export default Search
