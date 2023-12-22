import React, { useRef } from "react";

interface Props {
    handleObserved: () => void;
}

interface ReturnType {
    lastItemElementRef: (node: HTMLDivElement) => void;
}

const useInfiniteScroll = ({ handleObserved }: Props): ReturnType => {
    const observer = useRef<IntersectionObserver>();

    const lastItemElementRef = (node: HTMLDivElement) => {
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(
            (entries, observer) => {
                if (entries[0].isIntersecting) {
                    observer.unobserve(entries[0].target);
                    handleObserved();
                }
            },
            {
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: 1,
            }
        );
        if (!node) return;
        observer.current.observe(node);
    };

    return { lastItemElementRef };
};

export default useInfiniteScroll;
