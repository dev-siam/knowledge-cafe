import PropTypes from "prop-types"; // ES6
import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({ bookmarks, readingTime }) {
  return (
    <div className="md:w-1/3 text-center ">
      <h2 className="text-xl m-2 my-4 py-4 font-semibold bg-slate-200 rounded-lg">
        Reading Time: {readingTime} minutes
      </h2>
      <div className="text-center m-2 py-4 bg-slate-100 rounded-lg">
        <h2 className="text-xl mb-2 font-semibold">
          Bookmarked Blog: {bookmarks.length}
        </h2>
        <hr />
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.object.isRequired,
  readingTime: PropTypes.number.isRequired
};


