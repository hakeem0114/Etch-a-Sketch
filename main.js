document.addEventListener("DOMContentLoaded", () => {
    createBoard(16); //Creates the intial board: 16x16
    console.log("hi") //Test 
    
   // newSize();

})

function createBoard(size){
    let board = document.querySelector(".grid_container");

    board.style.gridTemplateColumns  = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows =  `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i=0; i < numDivs;i++){
        let div =  document.createElement("div");
        div.style.backgroundColor = "yellow";
        
        board.insertAdjacentElement("beforeend",div);
    }

}

function newSize(input){ //input paramater from HTML  = newSize(this.value)
    createBoard(input); //Passes the parameter to the board creator
    console.log("Confirm size works")
}