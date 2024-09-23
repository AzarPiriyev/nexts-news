export const getNews = async () => {
    const response = await fetch('http://localhost:3001/news');
    const world = await response.json();
    return world;
};

export const getNewsById = async (id: number) => {
    const response = await fetch(`http://localhost:3000/news/${id}`); 
    const newsDetail = await response.json();
    return newsDetail;
};



export const getSport = async () => {
    const response = await fetch('http://localhost:3001/sport');
    const sport = await response.json();
    return sport;
};

export const getLatest = async () => {
    const response = await fetch('http://localhost:3001/latest');
    const latest = await response.json();
    return latest;
};


