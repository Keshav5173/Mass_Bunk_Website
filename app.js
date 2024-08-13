
const endDate = "16 August 2024 12:00:00 AM"

const inputs = document.querySelectorAll("input")


function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

clock()

setInterval(
    () => {
        clock()
    },
    1000
)
const imposter= document.querySelector("#imposters");
document.querySelector("#more").addEventListener("click", ()=>{
    imposter.style.visibility= "visible";
    imposter.style.transition= "all 1s ease-in-out";
});

let yesArr=["yes_1.png", "yes_2.png", "yes_3.png", "yes_4.png", "yes_5.png"];
let noArr=["no_1.png", "no_2.png", "no_3.png", "no_4.png", "no_6.png", "no_7.png"];
let yes=document.querySelector(".yes");
let no= document.querySelector(".no");
let image = document.querySelector(".image");


no.addEventListener("click", ()=>{
    let randX= Math.floor(Math.random() * 90);
    let randY= Math.floor(Math.random() * 90);
    no.style.left=`${randX}%`;
    no.style.top=`${randY}%`;
    image.src = noArr[Math.floor(Math.random() * noArr.length)];

});
yes.addEventListener("click", ()=>{
    image.src= yesArr[Math.floor(Math.random() * yesArr.length)];
    yes.style.opacity= "0";
    no.style.opacity= "0";
    document.querySelector("#thanku").innerText= "Thank You !";
    document.querySelector(".modi").style.visibility= "visible";
    document.querySelector(".boy").style.visibility= "visible";
});
