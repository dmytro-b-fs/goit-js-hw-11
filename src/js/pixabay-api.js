import axios from "axios";
import { createGallery, showLoader, clearGallery, hideLoader } from "./render-functions.js";
import izitoast from "izitoast";



const apiKey = "56294512-5f18cb7c37608f5e527f32564";
const pixabayApiInstance = axios.create({ 
        baseURL: "https://pixabay.com/api/",   
        params: {
            key: apiKey,
        }
    })



export default function getImagesByQuery(query) {
    clearGallery();
    showLoader();
    pixabayApiInstance.get('', {
        params: {
          q: query,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
        },
      })
      .then(response => {
        hideLoader()
        if (response.data.hits.length === 0) {
            izitoast.error({
                title: 'Error', 
                message: 'There are no images for the specified query',}
            );
        }
        else{createGallery(response.data.hits);}  

      })
      .catch(error => {
        hideLoader()
        izitoast.error({title: 'Error', message: 'Failed to fetch images'});
        clearGallery();
      });

}