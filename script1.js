let allboxes = document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let h2=document.querySelector("h2");
let reset=document.querySelector(".reset");
let newbtn=document.querySelector(".newbtn");
let body=document.querySelector("body");
let count=0;
let allwinners=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let turnO = false;
let turnx = false;
for (let boxes of allboxes) {
    boxes.addEventListener("click", () => {
        if (boxes.innerText == "") {
            if (turnO) {
                boxes.innerText="O";
                boxes.style.color="green";
                turnO=false;
            count++;}
                else{
                    boxes.innerText="X";
                    boxes.style.color="grey";
                    count++;
                turnO=true;}
            checkwinner();
        }
    })
}
function showwinner(pos1){
msg.classList.remove("hide");
h2.innerText=`our winner is ${pos1}`
}
function disable(){
    for(boxes of allboxes){
        boxes.style.pointerEvents="auto";}
}
function changecolor(){;
    setTimeout(()=>{
        body.style.backgroundColor="red";
    },0.5);
}
function checkwinner(){
for(let winner of allwinners){
    let pos1=allboxes[winner[0]].innerText;
    let pos2=allboxes[winner[1]].innerText;
    let pos3=allboxes[winner[2]].innerText;
    if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1==pos2&&pos2==pos3){
            showwinner(pos1);
            disable();
        }    }
        if(count==9){
            h2.innerText="game draws";
            changecolor();
        }
}
}
reset.addEventListener("click",()=>{
    turnO=false;
    turnx=false;
    count=0;
    body.style.backgroundColor="#548687"
    for(boxes of allboxes){
        boxes.innerText="";}
    
})
newbtn.addEventListener("click",()=>{
    turnO=false;
    turnx=false;
    count=0;
    body.style.backgroundColor="#548687";
    msg.classList.add("hide");
    for(boxes of allboxes){
        boxes.innerText="";
    }
})