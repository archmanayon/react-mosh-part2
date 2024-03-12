import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const limit = 5;
  const [page, Setpage] = useState(1);
  const { data: posts, error, isLoading } = usePosts({ limit, page });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.id + " | " + post.title + " | " + post.userId}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        className="btn btn-outline-primary"
        onClick={() => Setpage(page - 1)}
      >
        Previous
      </button>
      <button
        // disabled={page === 1}
        className="btn btn-outline-primary"
        onClick={() => Setpage(page + 1)}
      >
        Next
      </button>
    </>
  );
};

export default PostList;
