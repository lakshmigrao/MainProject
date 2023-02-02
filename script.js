let game1 = false
let game2 = false
let player1 = true
let player2 = false
let gameWon = false;
let noOfX = 0;
let arrayIndex;
let dict = {"zero":0,"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8};
let arr =[];
let winnerId = document.querySelector("#winner")
let winnerMessageId = document.getElementById("winnerMessage")
let boxId = document.querySelectorAll(".item");
let button;
let button1 = document.getElementById("game1button")
let button2 = document.getElementById("game2button")
let arrayXWin = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let resultX=false;
let emptyBox=[0,1,2,3,4,5,6,7,8];//emptyBox.splice(7,1);console.log(emptyBox)
console.log(emptyBox.sub)
button1.addEventListener('click',playGame1)
button2.addEventListener('click',playGame2)


//console.log(boxId)
function playGame1(evt){
    game1=true;
    game2=false;
    document.getElementById("message").innerHTML=`<h3>You selected Player/Computer</h3>`
    boxId.forEach((box) =>{
        box.addEventListener("click",selectBox)
      })
}
function playGame2(evt){
    game2=true;
    game1=false;
    document.getElementById("message").innerHTML=`<h3>You selected Player1/Player2</h3>`
    boxId.forEach((box) =>{
        box.addEventListener("click",selectBox)
      })
}

function selectBox(evt){
    if(game1==true){
        document.getElementById(evt.target.title).innerHTML=`<img src="cross.jpg" width=75px>`
        arrayIndex = dict[evt.target.title]
        arr[arrayIndex] ="X";
        emptyBox.splice(arrayIndex,1)
        noOfX++
        checkGame();
        playGameComp();
    }else if(game2==true){
        if(player1==true){
            document.getElementById(evt.target.title).innerHTML=`<img src="cross.jpg" width=75px>`
            arrayIndex = dict[evt.target.title]
            arr[arrayIndex] ="X";
            player1=false;
            player2=true;
        }else if(player2==true){
            document.getElementById(evt.target.title).innerHTML=`<img src="circle.jpg" width=75px>`
            arrayIndex = dict[evt.target.title]
            arr[arrayIndex] ="0";
            player2=false;
            player1=true;
        }
        checkGame();
    }
    
}
// function playGameComp(){
//     let rand = Math.floor(Math.random()*8);
//     while (arr[rand] == "X" || arr[rand]=="0"){
//         rand = Math.floor(Math.random()*8);
//     }
//     arr[rand] = "0"
//     let key;
//     for(key in dict){
//         if (dict[key] == (rand)){
//             break;
//         }
//     }
//     if(!gameWon)
//         document.getElementById(key).innerHTML=`<img src="circle.jpg" width=75px>`;
//     checkGame();
// }
function playGameComp(){
    let rand;
    let tempArray=[];
    let tempArrayX=[];
    if(noOfX >= 2 ){
        for(let j=0;j<arr.length;j++){
            if(arr[j]=='X')
                tempArrayX.push(j)

        }
        console.log(tempArrayX+" line 94")
        let l;
        for(let k=0; k<arrayXWin.length;k++){
            for(l=0;l<2;l++){
                resultX = tempArrayX.every(val => arrayXWin[k].includes(val));
                if(resultX==false)
                    break;
            }
            if(resultX==true){
                rand=arrayXWin[k][l]
                console.log(k,l,arrayXWin[k][l],"We are here")
                arr[rand]="0"
                emptyBox.splice(rand,1)
                let key;
                for(key in dict){
                    if (dict[key] == (rand)){
                        break;
                     }
                }
                console.log("Line 111:- ",rand,key,arr)
                document.getElementById(key).innerHTML=`<img src="circle.jpg" width=75px>`;
                checkGame();
                break
            }
        }
        // console.log("Line 111:- ",rand,key,arr)
        // document.getElementById(key).innerHTML=`<img src="circle.jpg" width=75px>`;
        // checkGame();
        // arr[rand]="0"
        // let key;
        // for(key in dict){
        //     if (dict[key] == (rand)){
        //         break;
        //     }}
            //console.log("Line 111:- ",rand,key,arr)
        //    const PlayerOne = ['B', 'C', 'A', 'D'];
        // const PlayerTwo = ['D', 'C'];

        // const result = PlayerTwo.every(val => PlayerOne.includes(val));
        //console.log(result);
        
    // console.log("Line 111:- ",rand,key,arr)
    // document.getElementById(key).innerHTML=`<img src="circle.jpg" width=75px>`;
    // checkGame();
    }
    if (resultX==false) {
        let x;
    if (arrayIndex == 0){
        tempArray=[1,3,4]        
        for(x=0;x<tempArray.length;x++){
            if(arr[tempArray[x]] != "X" && arr[tempArray[x]]!="0"){
                rand = tempArray[x];
                break
            }
        }
        if(x==tempArray.length){
            rand=emptyBox[0];
        }
    }else if(arrayIndex==1){
        tempArray=[0,2,3,4,5]
        for(x=0;x<tempArray.length;x++){
            if(arr[tempArray[x]] != "X" && arr[tempArray[x]]!="0"){
                rand = tempArray[x];
                break
            }
        }
        if(x==tempArray.length){
            rand=emptyBox[0];
        }
    }else if(arrayIndex==2){
        tempArray=[1,4,5]
        for(x=0;x<tempArray.length;x++){
            if(arr[tempArray[x]] != "X" && arr[tempArray[x]]!="0"){
                rand = tempArray[x];
                break
            }
        }
        if(x==tempArray.length){
            rand=emptyBox[0];
        }
    }else if(arrayIndex==3){
        tempArray=[0,1,4,6,7]
        for(x=0;x<tempArray.length;x++){
            if(arr[tempArray[x]] != "X" && arr[tempArray[x]]!="0"){
                rand = tempArray[x];
                break
            }
        }
        if(x==tempArray.length){
            rand=emptyBox[0];
        }
    }else if(arrayIndex==4){
        tempArray=[0,1,2,3,5,6,7,8,9]
        for(x=0;x<tempArray.length;x++){
            if(arr[tempArray[x]] != "X" && arr[tempArray[x]]!="0"){
                rand = tempArray[x];
                break
            }
        }
        if(x==tempArray.length){
            rand=emptyBox[0];
        }
    }else if(arrayIndex==5){
        tempArray=[1,2,4,7,8]
        for(x=0;x<tempArray.length;x++){
            if(arr[tempArray[x]] != "X" && arr[tempArray[x]]!="0"){
                rand = tempArray[x];
                break
            }
        }
        if(x==tempArray.length){
            rand=emptyBox[0];
        }
    }else if(arrayIndex==6){
        tempArray=[3,4,7]
        for(x=0;x<tempArray.length;x++){
            if(arr[tempArray[x]] != "X" && arr[tempArray[x]]!="0"){
                rand = tempArray[x];
                break
            }
        }
        if(x==tempArray.length){
            console.log("line 225 :-"+emptyBox)
            rand=emptyBox[0];
        }
    }else if(arrayIndex==7){
        tempArray=[3,4,5,6,8]
        for(x=0;x<tempArray.length;x++){
            if(arr[tempArray[x]] != "X" && arr[tempArray[x]]!="0"){
                rand = tempArray[x];
                break
            }
        }
        if(x==tempArray.length){
            rand=emptyBox[0];
        }
    }else if(arrayIndex==8){
        tempArray=[4,5,7]
        for(x=0;x<tempArray.length;x++){
            if(arr[tempArray[x]] != "X" && arr[tempArray[x]]!="0"){
                rand = tempArray[x];
                break;
            }
        }
        if(x==tempArray.length){
            rand=emptyBox[0];
            
        }
    }
    arr[rand]="0"
    
    emptyBox.splice(rand,1)
    for(key in dict){
        if (dict[key] == (rand)){
            break;
        }
    }
    // if(!gameWon)
    document.getElementById(key).innerHTML=`<img src="circle.jpg" width=75px>`;
    checkGame();
    
}}
function checkGame(){
  console.log(arr)
  if(((arr[0]=="X") && (arr[1]=="X") && (arr[2]=="X")) || ((arr[3]=="X") && (arr[4]=="X") && (arr[5]=="X")) || ((arr[6]=="X") && (arr[7]=="X") && (arr[8]=="X"))||
     ((arr[0]=="X") && (arr[3]=="X") && (arr[6]=="X")) || ((arr[1]=="X") && (arr[4]=="X") && (arr[7]=="X")) || ((arr[2]=="X") && (arr[5]=="X") && (arr[7]=="X"))||
     ((arr[0]=="X") && (arr[4]=="X") && (arr[8]=="X")) || ((arr[2]=="X") && (arr[4]=="X") && (arr[6]=="X"))){
        console.log("YOU WIN")
        gameWon = true;
        if(game1 == true){
            document.getElementById("message").innerHTML=`YOU WIN!!!!!<img src="PartyPopper.jpg" width=100px>Press Clear to start a new game. `;
            //winnerMessageId.innerHTML = `<h2>YOU WIN<img src="PartyPopper.jpg" width=100px></h2>`;
            //winnerId.innerHTML = `Press Clear to start a new game. YOU WIN<img src="PartyPopper.jpg" width=100px>`;
            // winnerMessageId.style.justifyContent = center;
            // winnerMessageId.style.alignItems = "center";
            
        }else if(game2 == true){
            document.getElementById("message").innerHTML=`PLAYER1 WINs!!!!!<img src="PartyPopper.jpg" width=100px>Press Clear to start a new game. `;
            //winnerId.innerHTML = `Press Clear to start a new game. PLAYER1 WIN<img src="PartyPopper.jpg" width=100px>`
           // winnerId.innerHTML = `Player1 Win The Game .. Press Clear to start a new game.`;
            //winnerMessageId.innerHTML = `<h2>PLAYER1 WIN<img src="PartyPopper.jpg" width=100px></h2>`
           // winnerMessageId.innerHTML+= `<img src="PartyPopper.jpg" width=100px>`
            // winnerMessageId.style.justifyContent = "center";
        }
        //winnerMessageId.innerHTML+= `<img src="PartyPopper.jpg" width=100px>`;
       // winnerId.innerHTML = `Press Clear to start a new game.`;
    }
    else if(((arr[0]=="0") && (arr[1]=="0") && (arr[2]=="0")) || ((arr[3]=="0") && (arr[4]=="0") && (arr[5]=="0")) || ((arr[6]=="0") && (arr[7]=="0") && (arr[8]=="0"))||
    ((arr[0]=="0") && (arr[3]=="0") && (arr[6]=="0")) || ((arr[1]=="0") && (arr[4]=="0") && (arr[7]=="0")) || ((arr[2]=="0") && (arr[5]=="0") && (arr[7]=="0"))||
    ((arr[0]=="0") && (arr[4]=="0") && (arr[8]=="0")) || ((arr[2]=="0") && (arr[4]=="0") && (arr[6]=="0"))){
        console.log("YOU LOST, COMPUTER WINS")
        gameWon = true;
        if(game1==true){
            document.getElementById("message").innerHTML=`COMPUTER WINS!!!!!<img src="PartyPopper.jpg" width=100px>Press Clear to start a new game. `;
            //winnerId.innerHTML = `Press Clear to start a new game. COMPUTER WINS<img src="PartyPopper.jpg" width=100px>`;
            //winnerMessageId.innerHTML = `<h2>COMPUTER WINS<img src="PartyPopper.jpg" width=100px></h2>`;
           // winnerId.innerHTML = `Computer Win The Game .. Press Clear to start a new game.`;
        }else if(game2==true){
            document.getElementById("message").innerHTML=`PLAYER2 WINS!!!!!<img src="PartyPopper.jpg" width=100px>Press Clear to start a new game. `;
            //winnerId.innerHTML = `Press Clear to start a new game. PLAYER2 WINS<img src="PartyPopper.jpg" width=100px>`;
            //winnerMessageId.innerHTML = `<h2>PLAYER2 WINS<img src="PartyPopper.jpg" width=100px></h2>`;
        }
        //winnerMessageId.innerHTML+= `<img src="PartyPopper.jpg" width=100px>`;
        //winnerId.innerHTML = `Press Clear to start a new game.`;
    }
    if(gameWon){
        boxId.forEach((box) =>{
            box.removeEventListener('click',selectBox)
        })
        button = document.createElement('button');
        button.setAttribute("id" , "clearButton");
        button.textContent = "Clear";
        button.classList.add("gbutton")
        document.getElementById("message").innerHTML+= button.outerHTML;
        let buttonId = document.getElementById('clearButton')
        
        buttonId.addEventListener('click',removeFn);

       // buttonId.removeEventListener('click',removeFn)
    }
}

function removeFn(evt){
    winnerId.innerHTML = ""
    boxId.forEach((box) => {
    box.textContent = ""
    })   
   // document.getElementById("clearButton").innerHTML=""
    document.getElementById("message").innerHTML=""
 //console.log(boxId)
    newGame();
}
function newGame(){
    console.log("New Game")
    arr =[];
    gameWon=false;
    game1 = false;
    game2 = false;
    player1=true;
    player2=false;
    winnerMessageId.innerHTML=""
    boxId.forEach((box) =>{
        box.addEventListener('click',selectBox)
      })
      
}