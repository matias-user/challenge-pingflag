const divContainerCards = document.querySelector("#cards");

export const showNotFoundResults = () => {

    const h2 = document.createElement("h2");
    h2.classList.add("text-danger","mt-5","text-center");

    h2.textContent = "No se encontraron resultados.";

    divContainerCards.appendChild(h2);
};