fetch("https://api.chucknorris.io/jokes/random")
.then((response) =>{
    return response.json();
})
.then((data)=>{
    // console.log("data is:", data);
    let joke = data.value;
    console.log("Joke Of Today:", joke);
})
.catch();

// scenerio is like :
// try {
    
// } catch (error) {
    
// }