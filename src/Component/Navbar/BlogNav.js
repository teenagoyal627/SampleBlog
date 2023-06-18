import React from 'react'
import { Link } from 'react-router-dom'
import './BlogNav.css'
import { Navbar} from "react-bootstrap";
import Dropdown from './Dropdown';
import { navItems } from './SegmentDummy'
import Dropdown2 from './Dropdown2';
const BlogNavj = () => {
  return (
    <div>
      <nav className='navbar'>
      <Navbar.Brand href="/"
          style={{ color: "white", marginLeft: "10px", fontSize: "1rem" }}>
         OST PLACEMENT SEARCH PRIVATE LIMITED </Navbar.Brand>
      <ul className='nav-items'>
        {navItems.map ((item)=>{
            if(item.title === "News Feed" && "Upcoming Events"){
            return(
            <li 
            key={item.id}
             className={item.className}>
                <Link to={item.path}>{item.title}</Link>
                <Dropdown/>
                <Dropdown2/>
            </li>
        );
        }
        return (
              <li key={item.id} className={item.className}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
        })}
      </ul>
      </nav>
      
    </div>
  )
}

export default BlogNavj
