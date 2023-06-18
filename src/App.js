import React from 'react'
import { Route,BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NewsFeed from './Component/Home/Blogs/NewsFeed'
import UpcomingEvents from './Component/Home/Blogs/UpcomingEvents'
// import Jobs from './Component/Home/Blogs/Jobs'
import Home from './Component/Home/Home'
import DetailBlog from './Component/Redirect/DetailBlog'

export default function App() {
  return (
    <div>
    
       <BrowserRouter>
        <Route path ="/" exact><Home/></Route>
       <Route path="/newsFeed"><NewsFeed/></Route>
       <Route path="/upcomingEvents"><UpcomingEvents/></Route>
       {/* <Route path="/jobs"><Jobs/></Route> */}
       <Route path="/blog/:id"><DetailBlog/></Route>
       </BrowserRouter>
    </div>
  )
}
