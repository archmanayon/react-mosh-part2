import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Post>("/mosh");

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
    queryFn: apiClient.get,
    // () =>
    //   axios
    //     .get<Post[]>(
    //       "http://localhost/api/mosh",
    //       {
    //         params: {
    //           _start: (paginate.pageCount - 1) * paginate.limit,
    //           _limit: paginate.limit,
    //         },
    //       }
    //     )
    //     .then((res) => res.data),
    // staleTime: 10 * 1000,
  });
};

export default usePosts;
