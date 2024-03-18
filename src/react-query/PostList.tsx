import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const limit = 2;
  const [pageCount, SetpageCount] = useState(1);
  const { data: posts, error, isLoading } = usePosts({ limit, pageCount });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
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
        className="btn btn-outline-primary"
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
    </>
  );
};

export default PostList;
