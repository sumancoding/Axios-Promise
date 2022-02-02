document.getElementById('btn').addEventListener('click', makerequest);
//https://reqres.in/api/users


//Promise Then
function makerequest () {
  e.preventDefault();
  let name= document.getElementById('name').value
  let job= document.getElementById('job').value
  console.log('Button Clicked')
  const config= {
headers: {
  'Content-Type': 'application/json'
},
data: JSON.stringify({name: name, job: job})    
  }
  axios.post('https://reqres.in/api/users', config).then((res) => {
    console.log(res);
    console.log(res.data);

  }).catch((error) => {
    console.log(error)
  })
}

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