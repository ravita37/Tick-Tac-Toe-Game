let boxess=document.querySelectorAll(".box");
let reset=document.querySelector("#btn");
let mascontainer=document.querySelector(".mas-container");
let n = document.querySelector("#new");
let msg=document.querySelector("#msg");



let turn0=true;

const patterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

boxess.forEach((box)=> {
   box.addEventListener( "click",()=>{
    console.log("clicked");
   if(turn0==true){
    box.innerText="0";
    turn0=false;
   }
  else{
    box.innerText="#";
    turn0=true;
  }
  box.disabled=true;
  checkwinner();

});
});

const checkwinner=()=>{
  for(let pattern of patterns){
    let pos1=boxess[pattern[0]].innerText;
    let pos2=boxess[pattern[1]].innerText;
    let pos3=boxess[pattern[2]].innerText;
 
    if(pos1 !=""  &&  pos2!=""  &&  pos3 !=""){
      if(pos1 === pos2 &&  pos2===pos3){
        console.log("winner",pos1);
        showinner(pos1);
      }
    }
  }
   
};


const showinner=(winner)=>{
  msg.innerText=`Congratulations, Winner is ${winner}`;
  mascontainer.classList.remove("hide");
  disableboxes();

};

const disableboxes=()=>{
  for(let box of boxess){
    box.disabled= true;

  }
};

const resetgame=()=>{
  turn0=true;
  enableboxes();
  mascontainer.classList.add("hide");
}



const enableboxes=()=>{
  for(let box of boxess){
    box.disabled= false;
    box.innerText=""

  }
};
n.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
