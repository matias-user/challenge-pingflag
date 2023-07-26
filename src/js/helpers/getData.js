export const getData = async( titleToSearch = "",) => {
    
    try {
        const { data } = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/related/${titleToSearch}`);
        
        return data;
        
    } catch (error) {
        console.log(error);
    }
};