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
        divContainer.classList.add("card","col-6","col-md-4","col-sm-6","card-tamanio");
        divCardBody.classList.add("card-body",);
        titleCard.classList.add("card-title");
        paragraphCard.classList.add("card-text");
        linkCard.classList.add("card-link");

        // Agregar texto dinámico
        titleCard.textContent = normalizedtitle;
        // Mostrar un extrato de hasta 100 caracteres
        paragraphCard.textContent = extract.slice(0,maxCharactersToShow) + "...";
        linkCard.textContent = "Ir a articulo";

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