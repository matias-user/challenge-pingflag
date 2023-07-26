import { createCards } from "./createCards.js";
import { getData } from "./getData.js";
import { showLoader } from "./showLoader.js";

const searchInput = document.querySelector("#searchInput");
const buttonSearch = document.querySelector("#search");
const minLettersToSearch = 2;

export const listenSearch = () => {

    buttonSearch.addEventListener("click", async e => {
        e.preventDefault();
        
        const valueInput = searchInput.value;
        if( valueInput.length > minLettersToSearch){
            showLoader();
            const articles = await getData(valueInput);
            showLoader();
            createCards( articles );
        }

    });
};