const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(1){
            resolve('Value to resolve here');
        }else{
            reject('Error');
        }
    },3000)
})

promise1.then((succes)=>{
    console.log(succes);
},(err)=>{
    console.log(err);
})