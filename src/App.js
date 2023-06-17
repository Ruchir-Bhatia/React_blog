import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        $('header').addClass('hidden');
      } else {
        $('header').removeClass('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchBlogs();
    fetchNews();
    fetchEvents();
    fetchJobs();
  }, []);

  const fetchBlogs = async () => {
    // Simulating API call delay with setTimeout
    setTimeout(() => {
      const blogsData = [
        { _id: 1, title: "Blog 1", content: "Content for Blog 1" },
        { _id: 2, title: "Blog 2", content: "Content for Blog 2" },
        { _id: 3, title: "Blog 3", content: "Content for Blog 3" },
      ];
      setBlogs(blogsData);
    }, 1000);
  };

  const fetchNews = async () => {
    // Simulating API call delay with setTimeout
    setTimeout(() => {
      const newsData = [
        { id: 1, title: "News 1", content: "Content for News 1" },
        { id: 2, title: "News 2", content: "Content for News 2" },
        { id: 3, title: "News 3", content: "Content for News 3" },
      ];
      setNews(newsData);
    }, 1000);
  };

  
  
  const fetchEvents = async () => {
    // Simulating API call delay with setTimeout
    setTimeout(() => {
      const eventsData = [
        { id: 1, title: "Event 1", description: "Description for Event 1" },
        { id: 2, title: "Event 2", description: "Description for Event 2" },
        { id: 3, title: "Event 3", description: "Description for Event 3" },
      ];
      setEvents(eventsData);
    }, 1000);
  };

  const fetchJobs = async () => {
    // Simulating API call delay with setTimeout
    setTimeout(() => {
      const jobsData = [
        { _id: 1, title: "Job 1", description: "Description for Job 1" },
        { _id: 2, title: "Job 2", description: "Description for Job 2" },
        { _id: 3, title: "Job 3", description: "Description for Job 3" },
      ];
      setJobs(jobsData);
    }, 1000);
  };

  return (
    <div className="App">
      {/* ... header and hero section code ... */}

      <div className="content">
        <header>
          <h2>Explore Our Blogs</h2>
          <p>Find insights and knowledge in these three segments:</p>
        </header>

        <div className="section">
          <div className="blog-container">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div className="blog-item" key={blog._id}>
                  <h3>{blog.title}</h3>
                  <p>{blog.content}</p>
                </div>
              ))
            ) : (
              <p>No blogs available</p>
            )}
          </div>
        </div>

        <div className="section">
        <h2>Stay Updated with the Latest News</h2>
          <div className="blog-container">
            {news.length > 0 ? (
              news.map((article) => (
                <div className="blog-item" key={article.id}>
                  <h3>{article.title}</h3>
                  <p>{article.content}</p>
                </div>
              ))
            ) : (
              <p>No news available</p>
            )}
          </div>
        </div>

        <div className="section">
          <h2>Upcoming Events</h2>
          <div className="blog-container">
          {events.length > 0 ? (
            events.map((event) => (
              <div className="blog-item" key={event.id}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            ))
          ) : (
            <p>No events available</p>
          )}
          </div>
        </div>

        <div className="section">
          <h2>Explore Job Opportunities</h2>
          <div className="blog-container">
          {jobs.length > 0 ? (
            <div className="blog-container">
              {jobs.map((job) => (
                <div className="blog-item" key={job._id}>
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No job opportunities available</p>
          )}
          </div>
        </div>
      </div>

      <div className="footer">
        <p>
          &copy; {new Date().getFullYear()} Ruchir's Website. All rights
          reserved.
        </p>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default App;
