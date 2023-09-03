
// accessing the rolls numbers 

const oneEl=document.querySelector("#one"); 
const twoEl=document.querySelector("#two"); 
const threeEl=document.querySelector("#three"); 
const fourEl=document.querySelector("#four"); 
const fiveEl=document.querySelector("#five"); 
const sixEl=document.querySelector("#six"); 

// accessing the dice 
const diceEl=document.querySelector(".dice"); 

// Click event to all the rolls numbers

oneEl.addEventListener("click", ()=>{
    diceEl.style.transform=`rotatex(${180}deg)
    rotatey(${180}deg) rotatez(${180}deg)`;
 })

twoEl.addEventListener("click", ()=>{
    diceEl.style.transform=`rotatex(${360}deg)
    rotatey(${180}deg) rotatez(${0}deg)`;
})
threeEl.addEventListener("click", ()=>{
    diceEl.style.transform=`rotatex(${-180}deg)
    rotatey(${270}deg) rotatez(${0}deg)`;
})
fourEl.addEventListener("click", ()=>{
    diceEl.style.transform=`rotatex(${0}deg)
    rotatey(${-90}deg) rotatez(${0}deg)`;
})
fiveEl.addEventListener("click", ()=>{
    diceEl.style.transform=`rotatex(${-90}deg)
    rotatey(${0}deg) rotatez(${0}deg)`;
})
sixEl.addEventListener("click", ()=>{
    diceEl.style.transform=`rotatex(${90}deg)
    rotatey(${0}deg) rotatez(${0}deg)`;
})


// using browser dev tools in the inspect you can manually rotate the dice by changing it's transform property and can see the rotation. Through this you can find the particular rotation values for the rolls numbers.