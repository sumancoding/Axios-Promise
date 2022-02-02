document.getElementById('btn').addEventListener('click', makerequest);

//Promise then | Single Data

// function makerequest(){
//   console.log('Button Clicked')
//  axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
//    console.log(res)
//    console.log('Data:', res.data)
//     console.log('Id:', res.data.id)
//      console.log(res.data.title)
//       console.log(res.data.body)
//  }).catch((error) => {
//    console.log(error)
//  })
// }

//Promise then | Multiple Data showing in browser

// function makerequest(){
//   console.log('Button Clicked')
//  axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
//    console.log(res)
//    console.log('Data:', res.data)

//    let output= document.getElementById('name')
//     res.data.map(datas => {
//     output.innerHTML += `
//   <div>ID: ${datas.id}</div>
//   <div>TITLE:  ${datas.title}</div> <hr>
 
//     ` 
//     })
//  }).catch((error) => {
//    console.log(error)
//  })
// }


//Async and Await / Single Data

// async function makerequest() {
//   try {
// console.log('Button clicked')
// const res =await axios('https://jsonplaceholder.typicode.com/posts/1')
// console.log(res.data)
//   } catch(error) {
// console.log(error)
//   }
// }

