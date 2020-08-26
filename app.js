let url = 'https://api.imgflip.com/get_memes';
let img = document.querySelector("img");
let topDiv = document.querySelector("#top-div"); 
let bottomDiv = document.querySelector("#bottom-div"); 


const generateData = function(){
   
    let inp1 = document.querySelector("#inp1").value;
    let inp2 = document.querySelector("#inp2").value;  
    
    fetch(url)
    .then(response => response.json())
    .then((response)=>{
        let random = Math.round(Math.random()*100)
        setTimeout(()=>{
            img.src = response.data.memes[random].url;
        },1000)
    })

    topDiv.innerHTML = inp1;
    bottomDiv.innerHTML = inp2;
    
}