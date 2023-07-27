const minLettersToSearch = 3;

export const validateSearch = ( textInput = "", searchInput = null) => {
    if( textInput.length < minLettersToSearch && searchInput != null ){
        searchInput.classList.add("is-invalid");
        return false;
    }else{
        searchInput.value = "";
        searchInput.classList.remove("is-invalid");
        return true;
    }
};