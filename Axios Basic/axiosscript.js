document.getElementById('btn').addEventListener('click', makerequest);

//Promise Then / Error Handling
// function makerequest (){
//     console.log('Button Clicked')
//     axios.get('data.json').then((res) => {
//         console.log(res)
//         console.log(res.data)
//     }).catch((error) =>{console.log(error)})
// }

//Showing Data in browser

// function makerequest (){
//     console.log('Button Clicked')
//     axios.get('data.json').then((res) => {
//         console.log(res);
//         console.log(res.data);
//         document.getElementById('divdata1').innerText = res.data.roll
//         document.getElementById('divdata2').innerText = res.data.name
//     }).catch((error) =>{console.log(error)})
//     }


//Fetch Data from txt file
// function makerequest () {
//     console.log('Button Clicked')
//     config= {
//         method: 'get',
//         url: 'data.txt'
//     }
// axios(config).then((res) => {
//         console.log(res)
          
//     })
// }

//Promise Then / Error Handling
// function makerequest (){
//     console.log('Button Clicked')
//     axios.get('data.txt').then((res) => {
//         console.log(res);
//     }).catch((error) =>{console.log(error)}).then(() => {
//         console.log('Clean up')
//     })
// }

//Showing Data in browser

// function makerequest (){
//     console.log('Button Clicked')
//     axios.get('data.txt').then((res) => {
//         console.log(res);
//         document.getElementById('divdata').innerText = res.data
//     }).catch((error) =>{console.log(error)})
//     }


//Async and await

// async function makerequest() {
//     console.log('Button Clicked');
//   const res = await axios.get('data.txt')
//   console.log(res)
//   console.log(res.data)
// }

//Async and await | Error Handling

// async function makerequest() {
//   try{
//         console.log('Button Clicked');
//   const res = await axios.get('data.json')
//   console.log(res)
//   console.log(res.data)
//   document.getElementById('divdata1').innerText= res.data.name
//   } catch(error) {
//       console.log(error)
//   }
// }
 

// function makerequest (){
//     config={
//         'method': 'get'
//     }
//     console.log('Button Clicked')
//     axios.get('data.txt', config).then((res) => {
//         console.log(res);
//     })
// }
  
