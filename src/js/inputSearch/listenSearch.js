import { cleanCards, createCards } from "../card/index.js";
// import { createCards } from "../card/createCards.js";
import { getData } from "../data/getData.js";
import { showSpinner } from "../helpers/showSpinner.js";

const searchInput = document.querySelector("#searchInput");
const buttonSearch = document.querySelector("#search");
const minLettersToSearch = 2;

const urlApi = "https://en.wikipedia.org/api/rest_v1/page/related";

export const listenSearch = () => {

    buttonSearch.addEventListener("click", async e => {
        e.preventDefault();
        
        const valueInput = searchInput.value;
        if( valueInput.length > minLettersToSearch){
            // Limpiar cards del DOM. 
            // cleanCards();
            showSpinner();
            const articles = await getData(urlApi, valueInput);

            createCards( articles );
            showSpinner();

        }

    });
};