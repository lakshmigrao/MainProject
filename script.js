let board=[[0,0,0],[0,0,0],[0,0,0]]
let gameWon = false;
let dict = {"zero":0,"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8};
let arr =[];
let winnerId = document.querySelector("#winner")
let boxId = document.querySelectorAll(".item");
let button;
console.log(boxId)
boxId.forEach((box) =>{
  box.addEventListener("click",selectBox)
})

function selectBox(evt){
    let arrayIndex;
    document.getElementById(evt.target.title).innerHTML=`<img src="cross.jpg" width=50px justify-content=center>`
    arrayIndex = dict[evt.target.title]
    arr[arrayIndex] ="X";
    checkGame();
    playGameComp();
}
function playGameComp(){
  let rand = Math.floor(Math.random()*8);
  while (arr[rand] == "X"){
    rand = Math.floor(Math.random()*8);
 }
  arr[rand] = "0"
   let key;
    for(key in dict){
      if (dict[key] == (rand)){
          break;
      }
    }
  document.getElementById(key).innerHTML=`<img src="circle.jpg" width=50px>`;
  checkGame();
}
function checkGame(){
  console.log(arr)
  if(((arr[0]=="X") && (arr[1]=="X") && (arr[2]=="X")) || ((arr[3]=="X") && (arr[4]=="X") && (arr[5]=="X")) || ((arr[6]=="X") && (arr[7]=="X") && (arr[8]=="X"))||
     ((arr[0]=="X") && (arr[3]=="X") && (arr[6]=="X")) || ((arr[1]=="X") && (arr[4]=="X") && (arr[7]=="X")) || ((arr[2]=="X") && (arr[5]=="X") && (arr[7]=="X"))||
     ((arr[0]=="X") && (arr[4]=="X") && (arr[8]=="X")) || ((arr[2]=="X") && (arr[4]=="X") && (arr[6]=="X"))){
        console.log("YOU WIN")
        gameWon = true;
        winnerId.innerHTML = `You Win The Game .. Press Clear to start a new game.`;
    }
    else if(((arr[0]=="0") && (arr[1]=="0") && (arr[2]=="0")) || ((arr[3]=="0") && (arr[4]=="0") && (arr[5]=="0")) || ((arr[6]=="0") && (arr[7]=="0") && (arr[8]=="0"))||
    ((arr[0]=="0") && (arr[3]=="0") && (arr[6]=="0")) || ((arr[1]=="0") && (arr[4]=="0") && (arr[7]=="0")) || ((arr[2]=="0") && (arr[5]=="0") && (arr[7]=="0"))||
    ((arr[0]=="0") && (arr[4]=="0") && (arr[8]=="0")) || ((arr[2]=="0") && (arr[4]=="0") && (arr[6]=="0"))){
        console.log("YOU LOST, COMPUTER WINS")
        gameWon = true;
        winnerId.innerHTML = `Computer Win The Game .. Press Clear to start a new game.`;
    }
    if(gameWon){
        boxId.forEach((box) =>{
            box.removeEventListener('click',selectBox)
        })
        button = document.createElement('button');
        button.textContent = "Clear";
        winnerId.innerHTML+= button.outerHTML;
        let buttonId = document.querySelector("button")
        buttonId.addEventListener('click',removeFn);
        
    }
}

function removeFn(){
winnerId.innerHTML = ""
 boxId.forEach((box) => {
    box.textContent = ""
 })   
 console.log(boxId)
 newGame();
}
function newGame(){
    console.log("New Game")
    arr =[];
    gameWon=false;
    boxId.forEach((box) =>{
        box.addEventListener('click',selectBox)
      })
      
}