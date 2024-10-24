import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import PropTypes from "prop-types"; // ES6


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }


  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime +  time);

    // remove bookmark from bookmarks
    // console.log('remove bookmark' , id);
    const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id!== id);
    setBookmarks(updatedBookmarks);
    
  }




  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddBookmarks={handleAddBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

App.propTypes = {
  handleAddBookmarks: PropTypes.func.isRequired,


};

export default App
