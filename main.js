document.addEventListener("DOMContentLoaded", () => {
    createBoard(16); //Creates the intial board: 16x16
    console.log("hi") //Test 
    

})
//Global Variables
let color =""; //Empty string to hold color

//Functions

function createBoard(size){
    let board = document.querySelector(".grid_container");

    board.style.gridTemplateColumns  = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows =  `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i=0; i < numDivs;i++){
        let div =  document.createElement("div");

        //div.addEventListener("mouseover", colorDiv);
        div.addEventListener("mouseover", colorDiv)

        
        //Fills board with divs right after each other
        board.insertAdjacentElement("beforeend",div);

    }


}

function newSize(input){ //input paramater from HTML  = newSize(this.value)
    let user = validateInput(input); //passes user input to validator. Returns validated value to user variable
    createBoard(user); //Passes the validated variable to the board creator
    console.log("Confirm size works");


}

function validateInput(user){
    let message = document.querySelector("#message");
    if (user ==""){
        //There is already a message in the placeholder
    }else if(user < 0 || user > 100){
        message.textContent = "Enter a number between 0 to 100"
    }else{
        message.textContent = "BEGIN ETCHING";
        return user;
    }
}


//Colours  [CHANGE IF ELSE TO TENARY OPERATORS]
function colorDiv(){ //Called when a mouse moves over a div in the board
    if(color == "coloured"){ //If black/coloured == "coloured"
       this.style.backgroundColor  = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`; //0-256 to randomize red gradient
      //  this.style.backgroundColor = 'yellow';
      console.log("color");
    }else if(color =="black"){ this.style.backgroundColor='black'; console.log("black");}
}

function setColor(colorChoice){ //colorChoice argument = black or coloured depending onclick in HTML
     color = colorChoice; // Global variable " let color;" can be changed so, color = black or coloured
     console.log("setColor "+color);
}

function reset(){
    let all_divs = document.querySelectorAll("div") //returns a nodelist
    all_divs.forEach((parameter)=>{ //For each node(div) in the nodelist
        parameter.style.backgroundColor = "white"; //Makes all the created divs white
    })
}
