const minLettersToSearch = 2;


export const validateSearch = ( textInput = "", searchInput = null) => {
    console.log(searchInput);
    console.log(textInput);
    if( textInput.length < 3 && searchInput != null ){
        searchInput.classList.add("is-invalid");
        return false;
    }else{
        return true;
    }
};