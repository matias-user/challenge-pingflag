export const getData = async( titleToSearch = "",) => {
    
    try {
        const { data } = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/related/${titleToSearch}`);
        const { pages } = data;
        console.log(pages);
        return pages;
        
    } catch (error) {
        console.log(error);
    }
};