export const getDataWikipedia = async( url= "", titleToSearch = "") => {
    
    try {
        const { data } = await axios.get(`${url}/${titleToSearch}`);
        const { pages } = data;
        console.log(pages);
        return pages;
        
    } catch (error) {
        console.log(error.message);
    }
};