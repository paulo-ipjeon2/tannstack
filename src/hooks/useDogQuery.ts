import { useQuery, useQueryClient } from "@tanstack/vue-query";
import { getRandomDog } from "../api/dog-api";

const useDog = () => {
  const queryClient = useQueryClient();

  const dogQuery = useQuery({
    queryKey: ["dog"],
    queryFn: () => getRandomDog(),
    select: (response) => response.data.message,
  });

  const refreshDog = () => {
    queryClient.invalidateQueries(["dog"]);
  };

  return { dogQuery, refreshDog };
};

export default useDog;
