const divContainerCards = document.querySelector("#cards");

export const cleanCards = () => {
    if( divContainerCards.hasChildNodes() ){
        divContainerCards.innerHTML = null;
    }
}