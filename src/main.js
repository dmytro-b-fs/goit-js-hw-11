
import getImagesByQuery from "./js/pixabay-api.js";
import { createGallery, showLoader, clearGallery, hideLoader } from "./js/render-functions.js";
import izitoast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const searchForm = document.querySelector(".form");


document.addEventListener("DOMContentLoaded", () => {
    hideLoader();
});

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    clearGallery()
    showLoader()
    izitoast.destroy();
    const formData = new FormData(searchForm);

    if (formData.get('search-text').trim() === '') {
      izitoast.error({
        title: 'Error',
        message: 'Empty search query',
        position: 'topRight',
        timeout: 3000,
      });
      return;
    }

    getImagesByQuery(formData.get("search-text"))
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
        hideLoader();
        izitoast.error({title: 'Error', message: 'Failed to fetch images'});
        clearGallery();
      })
  
})



