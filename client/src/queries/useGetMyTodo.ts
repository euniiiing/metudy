import { useQuery } from "react-query";
import { getMyTodo } from "@/api/todo/get-my-todo";

const QUERY_KEY = "get-my-todolist";

const useGetMyTodo = () => {
    const { data, isLoading } = useQuery({
        queryKey: [QUERY_KEY],
        queryFn: getMyTodo,
    });
    return { data, isLoading };
};

export default useGetMyTodo;
