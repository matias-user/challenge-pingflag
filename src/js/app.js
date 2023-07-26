import { getData } from "./helpers/getData.js";
import  { createCards } from "./helpers/createCards.js"

document.addEventListener("DOMContentLoaded", async() => {
    const articles = await getData("api");
    createCards( articles );

});
