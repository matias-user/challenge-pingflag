const minLettersToSearch = 3;

// Agregar clase de bootstrap si hay error, si no quitar.
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