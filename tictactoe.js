let boxes= document.querySelectorAll(".box");
let reset= document.querySelector(".restart");
let newbtn = document.querySelector(".new");
let msgcontainer= document.querySelector(".wincontainer");
let msg= document.querySelector(".msg");

let turno= true;

const winpattern= [[0,1,2],
          [0,3,6],
          [0,4,8],
          [1,4,7],
          [2,5,8],
          [2,4,6],
          [3,4,5],
          [6,7,8]];



 boxes.forEach((box) => {
    box.addEventListener(("click"), () => {
        console.log("box was clicked");
        if(turno==true){
            box.innerText= '0';
            turno=false;
        }
        else{
            box.innerText= 'X';
            turno=true;
        }
        box.disabled= true;
        winningcondition();
    })
 })      

 const showwinner = (winner) =>{
        msg.innerText= `Congratulations, Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disablebuttons();
 };

 const winningcondition = () => {
      for(let pattern of winpattern){
       let pos1= boxes[pattern[0]].innerText;
       let pos2= boxes[pattern[1]].innerText;
       let pos3= boxes[pattern[2]].innerText;
      
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1=== pos2 && pos2=== pos3){
                console.log("Winner", pos1);
                showwinner(pos1);
            }
        }
      }
 }

 const disablebuttons = () => {
    for(box of boxes){
        box.disabled= true;
    }
 }
 
 const enablebuttons = () => {
    for(let box of boxes){
   box.disabled= false;
   box.innerText= "";
    }
 }

 const resetgame = () =>{
    turno= true;
    enablebuttons();
    msgcontainer.classList.add("hide");
    
 }

 newbtn.addEventListener("click", resetgame);

 reset.addEventListener("click", resetgame);

 