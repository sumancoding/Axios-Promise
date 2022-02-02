document.getElementById('btn').addEventListener('click', makerequest);
//https://reqres.in/api/users

// function makerequest () {
//   console.log('Button Clicked')
//   const config= {
// headers: {
//   'Content-Type': 'application/json'
// }
    
//   }
//   axios.post('https://reqres.in/api/users','{"name": "Suman", "roll": 123}', config).then((res) => {
//     console.log(res);
//     console.log(res.data);

//   }).catch((error) => {
//     console.log(error)
//   })
// }

// Async and Await

// async function makerequest(){
//   try{
// console.log('Button Clicked')
// const config = {
//   headers: {
//     'Content-Type': 'application/json'
//   }
// }
// const res = await axios.post('https://reqres.in/api/users', '{"name": "Suman", "roll": 123}', config);
// console.log(res.data)
//   } catch(error) {
//     console.log(error)
//   }
// }