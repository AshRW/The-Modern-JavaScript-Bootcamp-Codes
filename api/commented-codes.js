// const getCountriesWithRegion = (countryRegion)=>{
//     return new Promise((resolve, reject)=>{
//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', (e)=>{
//             if(e.target.readyState === 4 && e.target.status === 200){
//                 const data = JSON.parse(e.target.responseText);
//                 resolve(data);
//             } else if (e.target.readyState === 4){
//                 reject("Error in region fetch");
//             }
//         })
//         request.open('GET', `https://restcountries.eu/rest/v2/region/${countryRegion}`)
//         request.send();
//     });
// }

// const getCountry = (countryCode) => new Promise((resolve, reject)=>{
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', (e)=>{
//         if(e.target.readyState === 4 && e.target.status === 200){
//             // console.log(e.target.responseText)
//             const data = JSON.parse(e.target.responseText);
//             const index = data.findIndex((item)=>{
//                 return item.alpha2Code === countryCode;
//             })
//             resolve(data[index]);
//         } else if (e.target.readyState === 4){
//             reject('Error has occoured');
//         }
//     })
//     request.open('GET', 'https://restcountries.eu/rest/v2/all');
//     request.send();
// })