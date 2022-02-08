let userName=document.getElementById("uName");
let subBtn=document.getElementById("subBtn");
let personName=document.getElementById("personName");
let gender=document.getElementById("gender");
let probability=document.getElementById("prob");
let responseVal;

subBtn.addEventListener('click',function(){
    let name=userName.value;
    console.log("inside event");
   getPrediction(name);
   console.log("inside event after function");



});

function getPrediction(uName){
    let demo;
    console.log("inside prediction");
    fetch(`https://api.genderize.io/?name=${uName}`)
  .then(response => response.json())
  .then((data)=>{
    personName.innerText=data.name;
    gender.innerText=data.gender;
    probability.innerText=((data.probability)*100).toFixed(2)+'%';
});
}
