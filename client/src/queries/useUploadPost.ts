import { useMutation } from "react-query";

export const uploadPost = async () => {};

export const useUploadPost = () => {
    return useMutation(uploadPost, {
        onSuccess: () => {},
        onError: () => {},
    });
};
