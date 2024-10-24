import PropTypes from "prop-types"; // ES6
import { IoBookmarkOutline } from "react-icons/io5";


export default function Blog({ blog, handleAddBookmarks,handleMarkAsRead }) {
    const {id, cover, title, author_img, author_name, post_date, reading_time, hashtags } = blog;


  return (
    <div className="mb-5">
      <img
        src={cover}
        className="rounded-xl w-full"
        alt={`Cover of ${title}`}
      />
      <div className="flex justify-between py-5">
        <div className="flex gap-2 ">
          <div className="w-12">
            <img src={author_img} className="" alt="" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{author_name}</h3>
            <p className="text-lg  text-gray-700">{post_date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <p className="text-lg text-gray-700">{reading_time} min read</p>
          <button onClick={() => handleAddBookmarks(blog)} className="text-xl">
            <IoBookmarkOutline />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold ">{title}</h2>
      <div className="py-5">
        {hashtags.map((hashtag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 hover:bg-blue-300 rounded-full px-3 py-1 text-gray-700 mr-2"
          >
            <a href="">{hashtag}</a>
          </span>
        ))}
      </div>
      <button
        className="mb-8 text-purple-700 font-semibold underline"
        onClick={() => handleMarkAsRead(id, reading_time)}
      >
        Mark as read
      </button>
    </div>
  );
}


Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
