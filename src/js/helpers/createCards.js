const divContainerCards = document.querySelector("#cards");


export const createCards = ( articlesWikipedia = [] ) => {

    for (let i = 0; i < articlesWikipedia.length ; i++) {
        // Destructurar data de la API
        const { normalizedtitle, description, content_urls } = articlesWikipedia[i];
        console.log(normalizedtitle, description);
    
        const divContainer = document.createElement("div");
        const divCardBody = document.createElement("div");
        const titleCard = document.createElement("h5");
        const paragraphCard = document.createElement("p");
        const linkCard = document.createElement("a");

        // Agregando las clases de bootstrap
        divContainer.classList.add("card","col-12","col-md-2","col-sm-4");
        divCardBody.classList.add("card-body","w-75");
        titleCard.classList.add("card-title");
        paragraphCard.classList.add("card-text");
        linkCard.classList.add("card-link");

        // Agregar texto dinamico
        titleCard.textContent = normalizedtitle;
        paragraphCard.textContent = description;
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