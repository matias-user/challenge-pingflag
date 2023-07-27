const divContainerCards = document.querySelector("#cards");
const maxCharactersToShow = 100;

export const createCards = ( articlesWikipedia = [] ) => {

    for (let i = 0; i < articlesWikipedia.length ; i++) {
        // Destructurar data de la API
        const { normalizedtitle, extract, content_urls } = articlesWikipedia[i];
    
        const divContainer = document.createElement("div");
        const divCardBody = document.createElement("div");
        const titleCard = document.createElement("h5");
        const paragraphCard = document.createElement("p");
        const linkCard = document.createElement("a");

        // Agregando las clases de bootstrap
        divContainer.classList.add("card","col-6","col-md-4","col-sm-6");
        divCardBody.classList.add("card-body","w-75");
        titleCard.classList.add("card-title");
        paragraphCard.classList.add("card-text");
        linkCard.classList.add("card-link");

        // Agregar texto dinamico
        titleCard.textContent = normalizedtitle;
        paragraphCard.textContent = extract.slice(0,maxCharactersToShow) + "...";
        linkCard.textContent = "Ir al articulo";

        // Opciones para el link
        linkCard.href = content_urls.desktop.page;
        linkCard.target = "__blank";

        divCardBody.appendChild(titleCard);
        divCardBody.appendChild(paragraphCard);
        divCardBody.appendChild(linkCard);
        divContainer.appendChild( divCardBody );
        
        divContainerCards.appendChild( divContainer );
    }
};