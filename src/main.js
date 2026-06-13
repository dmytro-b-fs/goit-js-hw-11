import * as render from "./js/render-functions.js";
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

    getImagesByQuery(formData.get("search-text"));
    
})



