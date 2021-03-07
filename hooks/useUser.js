import useSWR from "swr";

export const useUser = () => {
  const fetcher = async (url) => {
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
    return data;
  };

  const { data, mutate, error } = useSWR("/api/profile", fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
