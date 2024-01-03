import { useQuery } from "react-query";

const QUERY_KEY = "get-my-todolist";

const getMyTodoList = async () => {
    return "test query";
};

const useGetMyTodoList = () => {
    const { data, isLoading } = useQuery({
        queryKey: [QUERY_KEY],
        queryFn: getMyTodoList,
    });
    console.log(data, isLoading);
    return data;
};

export default useGetMyTodoList;
