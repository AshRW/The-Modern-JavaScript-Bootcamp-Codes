const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    if(response.status===200){
        const data = await response.json();
        const index = data.findIndex((item)=>{
            return item.alpha2Code === countryCode;
        })
        return data[index]
    } else {
        throw new Error('Error in status code');
    }
}
// const getCountryOld = (countryCode) => {
//     return fetch('https://restcountries.eu/rest/v2/all', {}).then((res)=>{
//         if(res.status===200){
//             return res.json();
//         } else {
//             throw new Error('Status code is not 200');
//         }
//     }).then((data)=>{
//         const index = data.findIndex((item)=> item.alpha2Code === countryCode)
//         return data[index];
//     })
// }

const getCountriesWithRegion = async (countryRegion)=>{
    const response = await fetch(`https://restcountries.eu/rest/v2/region/${countryRegion}`);
    if(response.status===200){
        return response.json();
    } else throw new Error('Status code aint 200');
}

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=5b0c1b48ef8093')
    if(response.status === 200){
        return response.json();
    } else throw new Error('Error in status code');

}