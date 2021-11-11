import { GIPHY_APIKEY } from "../constants/constants";

export const getTrendingGifs = async (offset: any) => {
    return fetch('https://api.giphy.com/v1/gifs/trending' + '?api_key=' + GIPHY_APIKEY + '&offset=' + offset)
        .then(response => response.json())
}

