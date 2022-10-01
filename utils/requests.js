const requests = {
    trendingPath: `${process.env.NEXT_PUBLIC_BASE_API_PATH}/trending?perPage=20`,
    popularPath: `${process.env.NEXT_PUBLIC_BASE_API_PATH}/popular?perPage=20`,
    actionPath: `${process.env.NEXT_PUBLIC_BASE_API_PATH}/advanced-search?genres=["Action","Adventure"]`,
    mysteryPath: `${process.env.NEXT_PUBLIC_BASE_API_PATH}/advanced-search?genres=["Mystery"]`,
    comedyPath: `${process.env.NEXT_PUBLIC_BASE_API_PATH}/advanced-search?genres=["Comedy"]`,
    scifiPath: `${process.env.NEXT_PUBLIC_BASE_API_PATH}/advanced-search?genres=["Sci-Fi"]`,
};

export default requests;
