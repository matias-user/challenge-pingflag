import { cleanCards } from "./cleanCards.js";
import { createCards } from "./createCards.js";
import { getData } from "./getData.js";

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
            cleanCards();
            const articles = await getData(urlApi, valueInput);

            createCards( articles );
        }

    });
};