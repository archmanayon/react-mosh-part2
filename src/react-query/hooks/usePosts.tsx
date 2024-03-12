import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface pageType {
  limit: number;
  page: number;
}

const usePosts = (paginate: pageType) => {
  return useQuery<Post[], Error>({
    queryKey: ["post", paginate],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (paginate.page - 1) * paginate.limit,
            _limit: paginate.limit,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 1000,
  });
};

export default usePosts;
