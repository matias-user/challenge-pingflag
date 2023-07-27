import { cleanCards, createCards } from "../card/index.js";
import { getDataWikipedia } from "../data/getDataWikipedia.js";
import { showNotFoundResults } from "../helpers/showNotFoundResults.js";
import { showSpinner } from "../helpers/showSpinner.js";
import { validateSearch } from "./validateSearch.js";

const searchInput = document.querySelector("#searchInput");
const buttonSearch = document.querySelector("#search");

const urlApi = "https://en.wikipedia.org/api/rest_v1/page/related";

export const listenSearch = () => {

    buttonSearch.addEventListener("click", async e => {
        e.preventDefault();

        const textInput = searchInput.value;
        // Limpiar cards del DOM. 
        if( validateSearch( textInput, searchInput )  ){
            showSpinner();
            cleanCards();
            const articles = await getDataWikipedia(urlApi, textInput);
            if( !articles ) showNotFoundResults();
            createCards(articles);
            showSpinner();
        }


    });
};