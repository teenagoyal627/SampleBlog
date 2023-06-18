import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BlogNav.css'
import { Navbar, Nav } from "react-bootstrap";
export default function BlogNav() {
  return (
    <div >
      <Navbar style={{ backgroundColor: "skyblue" }}>
        <Navbar.Brand href="/"
          style={{ color: "black", marginLeft: "10px", fontSize: "1.1rem" }}>
          OST PLACEMENT SEARCH PRIVATE LIMITED </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
          <Nav className="navbar" >
            <div class="dropdown" >
              <a class="btn dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Newsfeeds </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="https://thesentry.org/news/?gclid=Cj0KCQjw1rqkBhCTARIsAAHz7K2kDR3cwxl5tvcYRsJCgirDl8R7w2IFxWcWw5HflrktvhdqG-HOtpwaAiGuEALw_wcB">Global Newsfeed</a></li>
                <li><a class="dropdown-item" href="https://www.collinsdictionary.com/dictionary/english/shout-loud">shout loud</a></li>
                <li><a class="dropdown-item" href="https://feedly.com/">News aggregation website</a></li>
                <li><a class="dropdown-item" href="https://www.androidauthority.com/best-rss-reader-apps-for-android-2-174770/">Web-based feed readers</a></li>
                <li><a class="dropdown-item" href="https://zapier.com/blog/best-rss-feed-reader-apps/">Feeds reader applications</a></li>
                <li><a class="dropdown-item" href="https://news.un.org/en/?gclid=Cj0KCQjw1rqkBhCTARIsAAHz7K2iQNUXFbgO5FaA47MjUpcmxKm7SyLzrGyoTvFeKiL448IUQ3c9Ja0aAkl_EALw_wcB">Social News aggregation</a></li>

              </ul>


            </div>
            <div class="dropdown">
              <a class="btn btn dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Update on upcoming events  </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="https://www.collinsdictionary.com/dictionary/english/upcoming-event">Events</a></li>
                <li><a class="dropdown-item" href="https://www.museion.it/artclub/?lang=en&gclid=Cj0KCQjw1rqkBhCTARIsAAHz7K3qzcNY2ZCqnO7La48N8sjGn7TUsXWV6i_DGVZzZPPU7zvCFLjZ-aMaApBiEALw_wcB"> Museion Art Club</a></li>
                <li><a class="dropdown-item" href="https://guide.mlh.io/general-information/hacker-experience/how-to-brainstorm-events">Hackathon Upcoming Events</a></li>
                <li><a class="dropdown-item" href="https://mediablog.prnewswire.com/upcoming-media-events/">Journalist and Bloggers</a></li>
                <li><a class="dropdown-item" href="https://developers.google.com/events"> Upcoming Develper Events</a></li>
              </ul>
            </div>

            <div class="dropdown">
              <a class="btn btn dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Jobs  </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="https://economictimes.indiatimes.com/jobs">OSTS</a></li>

                <li><a class="dropdown-item" href="https://www.naukri.com/web-developer-fresher-jobs">Web Developement</a></li>
                <li><a class="dropdown-item" href="https://in.linkedin.com/jobs/web-developer-jobs?position=1&pageNum=0">Linkedin</a></li>
                <li><a class="dropdown-item" href="https://internshala.com/fresher-jobs/web-development-jobs/">Internshala</a></li>
                <li><a class="dropdown-item" href="https://www.glassdoor.co.in/Job/india-python-fresher-jobs-SRCH_IL.0,5_IN115_KO6,20.htm">Glassdoor</a></li>
              </ul>
            </div>
            
          </Nav>

        </Navbar.Collapse>

      </Navbar>
    </div>
  )
}
