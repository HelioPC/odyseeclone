const API_KEY = 'd5b0fb3cfa63665e9e8d717a670d4529';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();

    return json;
}

const api = {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Featured',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Pop Culture',
                items: await basicFetch(`/trending/all/week?language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Artists',
                items: await basicFetch(`/movie/top_rated?language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Education',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Games',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Music',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Universe',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-pt&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Tech',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-pt&api_key=${API_KEY}`)
            },
        ]
    }
}

export default api;