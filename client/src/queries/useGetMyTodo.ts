import { useQuery } from "react-query";
import { getMyTodo } from "@/api/todo/get-my-todo";

const useGetMyTodo = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["myTodo"],
        queryFn: getMyTodo,
        cacheTime: Infinity,
    });
    return { data, isLoading };
};

export default useGetMyTodo;
