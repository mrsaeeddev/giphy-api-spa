import { GIPHY_APIKEY } from "../constants/constants";

export const getGifsByTrending = async (offset: any) => {
    return fetch('https://api.giphy.com/v1/gifs/trending?api_key=' + GIPHY_APIKEY + '&offset=' + offset)
        .then(response => response.json())
}

export const getGifsBySearch = async (offset: any, searchValue: any) => {
    return fetch('https://api.giphy.com/v1/gifs/search?api_key=' + GIPHY_APIKEY + '&offset=' + offset + '&q=' + searchValue)
        .then(response => response.json())
}

