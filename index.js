const boxes=document.querySelectorAll(".box");
console.log(boxes);
const gameinfo=document.querySelector(".game-info");
// const box=document.querySelector(".box");

const newgamebtn=document.querySelector(".btn");


let currentplayer='X';

let gameGrid;

const winningposition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [0,3,6]
];


function initGame(){
    currentplayer="X";
    gameGrid=["","","","","","","","",""];
    boxes.forEach((box, index)=>{

        box.innerText=" ";
        boxes[index].style.pointerEvents="all";
        box.classList=`box box${index+1}`;

        // box[index].style.pointerEvents="all";
     
    
    });

    // boxes.classList.remove("win");
    
    newgamebtn.classList.remove("active");
    gameinfo.innerText =`Current Player -${currentplayer}`;



}

initGame();

boxes.forEach((box,index)=>{
    console.log("clicked");

    box.addEventListener("click",()=>{

        handleClick(index);

    });
 

});

 function handleClick(index){

    console.log(" 0/x");

    if(gameGrid[index] === ""){

        boxes[index].innerText=`${currentplayer}`;
        gameGrid[index]=currentplayer;
        boxes[index].style.pointerEvents="none";
        //turn;
        swapturn();
        checkGameover();
        // boxes.classList.remove("win");
        // initGame();
        // newgamebtn.classList.remove("active");
        

    }

 }

 function checkGameover(){
    let answer="";
    // newgamebtn.classList.add("active");
    winningposition.forEach((position)=>{
        if((gameGrid[position[0]]!=="" || gameGrid[position[1]]!=="" || gameGrid[position[2]]!=="") && (gameGrid[position[0]]===gameGrid[position[1]]) &&(gameGrid[position[1]]===gameGrid[position[2]]))
        {

            if(gameGrid[position[0]]==="X")
            {
                answer="X";
            }
            else{

                answer="0";
            }

            boxes.forEach((box)=>{
                box.style.pointerEvents="none";
            });

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
            
        }
    });

    if(answer!== "")
    {
        gameinfo.innerText=`Winner Player - ${answer}`;
        newgamebtn.classList.add("active");
        return;
    }
   
    let fillcount=0;
    gameGrid.forEach((box)=>{
       
        if(box!=="")
            fillcount++;


    });

    if(fillcount === 9)
    {
        gameinfo.innerText="Game tied";
        newgamebtn.classList.add("active");

    }



 }

 function swapturn()
 {
    if(currentplayer ==="X"){

        currentplayer="0";
    }
    else{
        currentplayer="X";
    }
    gameinfo.innerText=` Current player -${currentplayer}`;
 }


 newgamebtn.addEventListener("click",initGame);