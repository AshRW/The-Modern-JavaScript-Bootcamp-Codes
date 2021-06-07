// const notes = [{
//     title:"Doc Appointment",
//     body:"Get to the dentist at 5:00PM"
// },{
//     title:"Check Weather",
//     body:"By an Umbrella"
// },{
//     title:"Buy Products",
//     body:"Get milk, butter, bread, and eggs"
// }]

// SECTION 8 : Data Storage, Libraries, and More

// --------------------------------------------------------
// Local Storage
// --------------------------------------------------------

// localStorage.setItem('city', 'NGP');
// console.log(localStorage.getItem('city'));
// localStorage.setItem('city', 'PUN');
// localStorage.removeItem('city');
// localStorage.clear();

// const userData = {
//     name:"Anurag RW",
//     location:"Nagpur"
// }
// userDataJSON = JSON.stringify(userData);
// localStorage.setItem('key',userDataJSON);

// const userDataJSON = localStorage.getItem('key');
// const userData = JSON.parse(userDataJSON);
// console.log(`${userData.name} is in  ${userData.location}`);

// const now1 = new Date();
// console.log(now1.getTime());
// const now2 = new Date('September 2 1998 15:01:00')
// console.log(now2.getTime())
// console.log(now1.getTime()<now2.getTime())

// const now = moment().set({'year':1998, 'month':8, 'date':2, 'hour': 15, 'minute':1, 'second':00});
// console.log(now.format('MMMM D, YYYY'));
// console.log(now.fromNow());