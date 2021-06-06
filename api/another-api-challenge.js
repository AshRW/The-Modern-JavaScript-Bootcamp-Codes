getLocation().then(success=>{
    console.log(`Your location is ${success.city} of ${success.region}`)
    return getCountry(success.country)
}).then((success)=>{
    // console.log(success)
    return getCountriesWithRegion(success.region);
}).then((success)=>{
    console.log(success);
}).catch(err=>{
    console.log(err)
})