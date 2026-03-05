let allboxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let winningpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let turnO=true;
let turnx=true;
for(let box of allboxes){
    box.addEventListener("click",()=>{
        if(box.innerText==""){
        if(turnO){
        box.innerText="O";
        box.style.color="green";
        turnO=false;
        }
        else{
        box.innerText="X";
         box.style.color="yellow";
        turnO=true;
        }}
    ischeck();
    });
}
showwinner=(winner,pos1)=>{
msg.classList.remove("hide");
winner.innerText=`Congratulations! winner is${pos1}`;
}
function disable(){
    for(let tags of allboxes){
        tags.style.pointerEvents="auto";
    }
}
function ischeck(){
    for(let winning of winningpatterns){
        let pos1=allboxes[winning[0]].innerText;
        let pos2=allboxes[winning[1]].innerText;
        let pos3=allboxes[winning[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                console.log("winner is",pos1);
                let h2=document.querySelector("h2");
                showwinner(h2,pos1);
                disable();
            }
        }
    }
}
let newgame=document.querySelector(".newbutton");
newgame.addEventListener("click",()=>{
    turnO=false;
    turnx=false;
    msg.classList.add("hide");
    for(tags of allboxes){
        tags.innerText="";
    }
});

let rese=document.querySelector(".reset");
rese.addEventListener("click",()=>{
    turnO=false;
    turnx=false;
    for(tags of allboxes){
        tags.innerText="";
    }
});
