const minLettersToSearch = 2;


export const validateSearch = ( textInput = "", searchInput = null) => {
    if( textInput.length < 3 && searchInput != null ){
        searchInput.classList.add("is-invalid");
        return false;
    }else{
        searchInput.classList.remove("is-invalid");
        return true;
    }
};