let game1 = false
let game2 = false
let player1 = true
let player2 = false
let gameWon = false;
let gameOver = false
let noOfX = 0;
let arrayIndex;
let dict = {"zero":0,"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8};
let arr =[9,9,9,9,9,9,9,9,9];
let winnerId = document.querySelector("#winner")
let winnerMessageId = document.getElementById("winnerMessage")
let boxId = document.querySelectorAll(".item");
let button;
let button1 = document.getElementById("game1button")
let button2 = document.getElementById("game2button")
let arrayXWin = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let resultX=false;
let emptyBox=[0,1,2,3,4,5,6,7,8];
button1.addEventListener('click',playGame1)
button2.addEventListener('click',playGame2)



function playGame1(evt){
    button1.style.backgroundColor = "pink"
    button2.style.backgroundColor ="white"
    removeFn();
    game1=true;
    game2=false;
    document.getElementById("message").innerHTML=`<h4>You selected Player/Computer</h4>`
    boxId.forEach((box) =>{
        box.addEventListener("click",selectBox)
      })
}
function playGame2(evt){
    button2.style.backgroundColor = "pink"
    button1.style.backgroundColor ="white"
    removeFn();
    game2=true;
    game1=false;
    document.getElementById("message").innerHTML=`<h4>You selected Player1/Player2</h4>`
    boxId.forEach((box) =>{
        box.addEventListener("click",selectBox)
      })
}
function selectBox(evt){
    if(game1==true){
        document.getElementById(evt.target.title).innerHTML=`<img src="cross.jpg" width=75px>`
        arrayIndex = dict[evt.target.title]
        console.log(arrayIndex+"Array Index")
        arr[arrayIndex] ="X";
        //emptyBox[arrayIndex]=""
        noOfX++
        checkGame();
        if(!gameOver)
            setTimeout(playGameComp, 1000);
    }else if(game2==true){
        if(player1==true){
            document.getElementById(evt.target.title).innerHTML=`<img src="cross.jpg" width=75px>`
            arrayIndex = dict[evt.target.title]
            arr[arrayIndex] ="X";
            noOfX++;
            player1=false;
            player2=true;
            
        }else if(player2==true){
            document.getElementById(evt.target.title).innerHTML=`<img src="circle.jpg" width=75px>`
            arrayIndex = dict[evt.target.title]
            if(arr[arrayIndex]!="0" && arr[arrayIndex]!="X")
                arr[arrayIndex] ="0";
            player2=false;
            player1=true;
    
        }
        checkGame();
    }
    
}

function playGameComp(){
    let rand;
    let randTemp;
    let tempArray=[];
    let tempArrayX=[];
    if(noOfX==1){
        rand = Math.floor(Math.random()*arr.length)
        if(arr[rand]=="X"){
            for(let p=0;p<arr.length;p++){
                if(arr[p]!="X"){
                    rand=p
                    break
                }
            }
        }
    }
    else if (noOfX==2) {
        let x=0;
        let g=0;
        console.log("Inside playGameComp, Array Index"+arrayIndex)
        if (arrayIndex == 0){
            tempArray=[1,3,4]        
            for(x=0;x<tempArray.length;x++){
                if(arr[tempArray[x]] != "X" && arr[tempArray[x]]!="0"){
                    rand = tempArray[x];
                    break
                }
            }
            if(x==tempArray.length){
                if(arr[rand]=="X" || arr[rand]=="0" ){
                    for(let p=0;p<arr.length;p++){
                        if(arr[p]!="0" && arr[p]!="X"){
                            rand=p
                            break
                        }
                    }
                }
            }
        }else if(arrayIndex == 1){
            tempArray=[0,2,3,4,5]
            console.log("HELLO")
            for(x=0;x<tempArray.length;x++){
                if(arr[tempArray[x]] != "X" && arr[tempArray[x]]!="0"){
                    rand = tempArray[x];
                    break
                }
            }
            if(x==tempArray.length){
                if(arr[rand]=="X" || arr[rand]=="0" ){
                    for(let p=0;p<arr.length;p++){
                        if(arr[p]!="0" && arr[p]!="X"){
                            rand=p
                            break
                        }
                    }
                }
            }
        }else if(arrayIndex==2){
            tempArray=[1,4,5]
        //rand=tempArray[x];
            for(x=0;x<tempArray.length;x++){
                if(arr[tempArray[x]] != "X" && arr[tempArray[x]]!="0"){
                    rand = tempArray[x];
                    break;
                }
            }
            if(x==tempArray.length){
                if(arr[rand]=="X" || arr[rand]=="0" ){
                    for(let p=0;p<arr.length;p++){
                        if(arr[p]!="0" && arr[p]!="X"){
                            rand=p
                            break
                        }
                    }
                }
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
                if(arr[rand]=="X" || arr[rand]=="0" ){
                    for(let p=0;p<arr.length;p++){
                        if(arr[p]!="0" && arr[p]!="X"){
                            rand=p
                            break
                        }
                    }
                }
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
                if(arr[rand]=="X" || arr[rand]=="0" ){
                    for(let p=0;p<arr.length;p++){
                        if(arr[p]!="0" && arr[p]!="X"){
                            rand=p
                            break
                        }
                    }
                }
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
                if(arr[rand]=="X" || arr[rand]=="0" ){
                    for(let p=0;p<arr.length;p++){
                        if(arr[p]!="0" && arr[p]!="X"){
                            rand=p
                            break
                        }
                    }
                }
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
                if(arr[rand]=="X" || arr[rand]=="0" ){
                    for(let p=0;p<arr.length;p++){
                        if(arr[p]!="0" && arr[p]!="X"){
                            rand=p
                            break
                        }
                    }
                }
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
                if(arr[rand]=="X" || arr[rand]=="0" ){
                    for(let p=0;p<arr.length;p++){
                        if(arr[p]!="0" && arr[p]!="X"){
                            rand=p
                            break
                        }
                    }
                }
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
                if(arr[rand]=="X" || arr[rand]=="0" ){
                    for(let p=0;p<arr.length;p++){
                        if(arr[p]!="0" && arr[p]!="X"){
                            rand=p
                            break
                        }
                    }
                }
            }
        }
    } else if(noOfX >= 3 ){

        if(arr[0]=="X" && arr[1]=="X" && arr[2]!="0")
            randTemp=2
        else if(arr[1]=="X" && arr[2]=="X" && arr[0]!="0"||"X")
            randTemp=0
        else if(arr[2]=="X" && arr[0]=="X" && arr[1]!="0"||"X")
            randTemp=1
        else if(arr[3]=="X" && arr[4]=="X" && arr[5]!="0"||"X")
            randTemp=5
        else if(arr[4]=="X" && arr[5]=="X" && arr[3]!="0"||"X")
            randTemp=3
        else if(arr[5]=="X" && arr[3]=="X" && arr[4]!="0"||"X")
            randTemp=3
        else if(arr[6]=="X" && arr[7]=="X" && arr[8]!="0"||"X")
            randTemp=8
        else if(arr[7]=="X" && arr[8]=="X" && arr[6]!="0"||"X")
            randTemp=6
        else if(arr[8]=="X" && arr[6]=="X" && arr[7]!="0"||"X")
            randTemp=7
        else if(arr[0]=="X" && arr[3]=="X" && arr[6]!="0"||"X")
            randTemp=6
        else if(arr[3]=="X" && arr[6]=="X" && arr[0]!="0"||"X")
            randTemp=0
        else if(arr[6]=="X" && arr[0]=="X" && arr[3]!="0"||"X")
            randTemp=3
        else if(arr[1]=="X" && arr[4]=="X" && arr[7]!="0"||"X")
            randTemp=7
        else if(arr[4]=="X" && arr[7]=="X" && arr[1]!="0"||"X")
            randTemp=1
        else if(arr[7]=="X" && arr[1]=="X" && arr[4]!="0"||"X")
            randTemp=4
        else if(arr[2]=="X" && arr[5]=="X" && arr[8]!="0"||"X")
            randTemp=8
        else if(arr[2]=="X" && arr[8]=="X" && arr[5]!="0"||"X")
            randTemp=5
        else if(arr[8]=="X" && arr[5]=="X" && arr[2]!="0"||"X")
            randTemp=2
        else if(arr[0]=="X" && arr[4]=="X" && arr[8]!="0"||"X")
            randTemp=8
        else if(arr[8]=="X" && arr[0]=="X" && arr[4]!="0"||"X")
            randTemp=4
        else if(arr[8]=="X" && arr[4]=="X" && arr[0]!="0"||"X")
            randTemp=0
        else if(arr[2]=="X" && arr[4]=="X" && arr[6]!="0"||"X")
            randTemp=6
        else if(arr[2]=="X" && arr[6]=="X" && arr[4]!="0"||"X")
            randTemp=4
        else if(arr[6]=="X" && arr[4]=="X" && arr[2]!="0"||"X")
            randTemp=2
        else 
            randTemp=0
        if(arr[randTemp]=="X" || arr[randTemp]=="0" ){
            for(let p=0;p<arr.length;p++){
                if(arr[p]!="0" && arr[p]!="X"){
                    randTemp=p
                    break
                }
            }
        }
        rand=randTemp;
    }
       // rand = randTemp;
        // arr[rand]="0"
        // let key;
        // for(key in dict){
        //     if (dict[key] == (rand)){
        //         break;
        //     }
        // }
        // if(!gameOver)
        //     document.getElementById(key).innerHTML=`<img src="circle.jpg" width=75px>`;
        // checkGame();

    //else if(noOfX == 2 ) {//if(noOfX <= 2 )
        for(let j=0;j<arr.length;j++){
            if(arr[j]=='X')
                tempArrayX.push(j)

        }
        let l;
        for(let k=0; k<arrayXWin.length;k++){
            for(l=0;l<2;l++){
                resultX = tempArrayX.every(val => arrayXWin[k].includes(val));
                if(resultX==false)
                    break;
            }
            if(resultX==true){
                rand=[arrayXWin[k][l]]
                console.log(arrayXWin[k][l]+"arrayXWin[k][l]]")
                if(arr[arrayXWin[k][l]]=="X" || arr[arrayXWin[k][l]]=="0" ){
                    for(let p=0;p<arr.length;p++){
                        if(arr[p]!="0" && arr[p]!="X"){
                            rand=p
                            console.log(rand+"value of rand inside resultXtrue")
                            break
                            
                        }
                    }
                } 
                
            }
        }
        console.log(rand+"rand")
        arr[rand]="0"
        let key;
        for(key in dict){
            if (dict[key] == (rand)){
                break;
            }
        }
        if(!gameWon && !gameOver)
            document.getElementById(key).innerHTML=`<img src="circle.jpg" width=75px>`;
        checkGame();
        
   // }
   
//     arr[rand]="0"
//     for(key in dict){
//         if (dict[key] == (rand)){
//             break;
//         }
//     }
//    if(!gameWon && !gameOver)
//         document.getElementById(key).innerHTML=`<img src="circle.jpg" width=75px>`;
//     checkGame();
}
function checkGame(){
    console.log(arr)
    if(((arr[0]=="X") && (arr[1]=="X") && (arr[2]=="X")) || ((arr[3]=="X") && (arr[4]=="X") && (arr[5]=="X")) || ((arr[6]=="X") && (arr[7]=="X") && (arr[8]=="X"))||
       ((arr[0]=="X") && (arr[3]=="X") && (arr[6]=="X")) || ((arr[1]=="X") && (arr[4]=="X") && (arr[7]=="X")) || ((arr[2]=="X") && (arr[5]=="X") && (arr[8]=="X"))||
       ((arr[0]=="X") && (arr[4]=="X") && (arr[8]=="X")) || ((arr[2]=="X") && (arr[4]=="X") && (arr[6]=="X"))){
          gameWon = true;
          gameOver=true
          document.getElementById("message").innerHTML=""
          if(game1 == true){
              document.getElementById("winnerMessage").innerHTML=`YOU WIN!!!!!<img src="PartyPopper.jpg" width=125px>`;
              
          }else if(game2 == true){
              document.getElementById("winnerMessage").innerHTML=`PLAYER1 WINs!!!!!<img src="PartyPopper.jpg" width=125px>`;
          }
      }
      else if(((arr[0]=="0") && (arr[1]=="0") && (arr[2]=="0")) || ((arr[3]=="0") && (arr[4]=="0") && (arr[5]=="0")) || ((arr[6]=="0") && (arr[7]=="0") && (arr[8]=="0"))||
      ((arr[0]=="0") && (arr[3]=="0") && (arr[6]=="0")) || ((arr[1]=="0") && (arr[4]=="0") && (arr[7]=="0")) || ((arr[2]=="0") && (arr[5]=="0") && (arr[8]=="0"))||
      ((arr[0]=="0") && (arr[4]=="0") && (arr[8]=="0")) || ((arr[2]=="0") && (arr[4]=="0") && (arr[6]=="0"))){
          gameWon = true;
          gameOver=true
          document.getElementById("message").innerHTML=""
          if(game1==true){
              document.getElementById("winnerMessage").innerHTML=`COMPUTER WINS!!!!!<img src="PartyPopper.jpg" width=125px>`;
          }else if(game2==true){
              document.getElementById("winnerMessage").innerHTML=`PLAYER2 WINS!!!!!<img src="PartyPopper.jpg" width=125px>`;
          }
      }else if(noOfX==5){
          gameOver=true;
          gameOne=false;
          document.getElementById("winnerMessage").innerHTML=`ITS A DRAW!!!!!<img src="tryagain.jpg" width=125px>`;
      }
      if(gameOver){
          boxId.forEach((box) =>{
              box.removeEventListener('click',selectBox)
          })
          button1.style.backgroundColor ="white"
          button2.style.backgroundColor ="white"
          button = document.createElement('button');
          button.setAttribute("id" , "clearButton");
          button.textContent = "RESET";
          button.classList.add("gbutton")
          document.getElementById("winnerMessage").innerHTML+= button.outerHTML;
          let buttonId = document.getElementById('clearButton')
          buttonId.style.justifyContent="center"
          buttonId.style.alignContent="center"
          buttonId.addEventListener('click',removeFn);
      }
  }

  
function removeFn(evt){
    winnerId.innerHTML = ""
    boxId.forEach((box) => {
    box.textContent = ""
    })   
    document.getElementById("message").innerHTML=""
 
    newGame();
}
function newGame(){
    arr =[];
    noOfX=0;
    gameOver=false;
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