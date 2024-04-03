import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const limit = 2;
  const [pageCount, SetpageCount] = useState(1);
  const { data: posts, error, isLoading } = usePosts({ limit, pageCount });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="">
      <div className="flex items-end">
        {/* sample flex */}
        <div className="bg-green-800 h-5 w-5 ml-3 text-center">f</div>
        <div className="bg-yellow-800 h-10 w-5 ml-3 text-center">s</div>
        <div className="rid text-center">t</div>
      </div>
      <ul className="list-group sm:text-red-700  md:text-blue-400 lg:text-green-800">
        {posts?.map((post) => (
          <li
            key={post.id}
            className="list-group-item pl-3 border border-b-gray-500"
          >
            {post.id +
              " | " +
              post.publisher_number +
              " | " +
              post.title +
              " | " +
              post.author}
          </li>
        ))}
      </ul>
      <button
        disabled={pageCount === 1}
        className="btn btn-outline-primary px-5"
        onClick={() => SetpageCount(pageCount - 1)}
      >
        Previous
      </button>
      <button
        // disabled={pageCount === 1}
        className="btn btn-outline-primary"
        onClick={() => SetpageCount(pageCount + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default PostList;
