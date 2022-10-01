import useSWRInfinite from "swr/infinite";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function usePaginatedAnime(subtype) {
    const PAGE_LIMIT = 20;

    const { data, error, size, setSize } = useSWRInfinite(
        (index) =>
            `${
                process.env.NEXT_PUBLIC_BASE_API_PATH
            }/advanced-search?perPage=${PAGE_LIMIT}&page=${
                index + 1
            }&format=${subtype.toUpperCase()}`,
        fetcher
    );

    const anime = data ? [].concat(...data) : [];
    const isLoadingInitialData = !data && !error;
    const isLoadingMore =
        isLoadingInitialData ||
        (size > 0 && data && typeof data[size - 1] === "undefined");
    const isEmpty = data?.[0]?.length === 0;
    const isReachingEnd =
        isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT);

    return { anime, error, isLoadingMore, size, setSize, isReachingEnd };
}
