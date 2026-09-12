
let game=document.querySelectorAll(".game");
let win=document.querySelector("#win");
let reset=document.querySelector(".reset");
let scoreX=document.querySelector("#X");
let scoreO=document.querySelector("#O");
let newgame=document.querySelector(".newgame");
let newSound=document.querySelector("#newSound");
let clickSound=document.querySelector("#clickSound");
let bgSound=document.querySelector("#bgSound");
let winSound=document.querySelector("#winSound")
bgSound.volume = 0.3;

let fix=()=>{
  for(button of game){
    button.innerHTML="";
    button.disabled=false;
   tell=true;
   win.style.display='none';
  }
  newSound.play();
}
let disable= ()=>{game.forEach((button)=>{
button.disabled=true;

})}
reset.addEventListener("click",()=>fix());

arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let tell=true;

let turn=(b0)=>{
  if(tell){
    b0.innerHTML="O";
    tell=false;
    b0.disabled = true;
    clickSound.play();
    winner();
  }else{ b0.innerHTML="X";
    tell=true;
  b0.disabled = true;
  clickSound.play();
   winner();}
}


game.forEach((button)=>{
button.addEventListener("click",()=>turn(button));
 
}




)
let X=0;
let O=0;
let new1= ()=>{
 for(button of game){
    button.innerHTML="";
    button.disabled=false;
   tell=true;
   win.style.display='none';
   newSound.play();
  }
  X=0;
  O=0;
  scoreX.innerHTML=` ${X}`;
  scoreO.innerHTML=` ${O}`;
}
newgame.addEventListener("click",()=>new1());
const winner=()=>{
  
for(let pos of arr){
  let pos1=game[pos[0]];
  let pos2=game[pos[1]];
  let pos3=game[pos[2]];
  if (pos1.innerHTML!='' && pos2.innerHTML!='' && pos3.innerHTML!='' ) {
    if (pos1.innerHTML==pos2.innerHTML && pos2.innerHTML==pos3.innerHTML) {
      if(tell){
        console.log(" winner-->X");
        win.innerHTML=`winner -->${pos1.innerHTML}`;
        win.style.display = "block";
        X++;
        scoreX.innerHTML=` ${X}`;
        winSound.play()
        disable();
        

      }else{console.log(" winner-->O");
        win.innerHTML=`winner -->${pos1.innerHTML}`;
        win.style.display = "block";
         O++;
        scoreO.innerHTML=` ${O}`;
        winSound.play();
        disable();
        
      }
    }
  }

}


}




