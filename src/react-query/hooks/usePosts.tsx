import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Post {
  id: number;
  publisher_number: string;
  title: string;
  author: string;
}

interface pageType {
  limit: number;
  pageCount: number;
}

const usePosts = (paginate: pageType) => {
  return useQuery<Post[], Error>({
    queryKey: ["post", paginate],
    queryFn: () =>
      axios
        .get<Post[]>(
          // "https://jsonplaceholder.typicode.com/posts",

          "http://localhost/api/mosh",
          {
            params: {
              _start: (paginate.pageCount - 1) * paginate.limit,
              _limit: paginate.limit,
            },
          }
        )
        .then((res) => res.data),
    staleTime: 10 * 1000,
  });
};

export default usePosts;
