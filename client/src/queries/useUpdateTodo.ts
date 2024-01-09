import { useMutation, useQueryClient } from "react-query";

const updateTodo = async () => {
    console.log("update todo");
    return [];
};

export const useUpdateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["update-todo"],
        mutationFn: updateTodo,
        onSuccess(data) {
            queryClient.setQueryData(["myTodo"], (data: any) => [...data]);
        },
    });
};
