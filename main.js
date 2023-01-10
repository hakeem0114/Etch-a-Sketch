const size1 = getUser()  //Find why this is not working
console.log(size1)


//createGrid(16);

function getUser(){
    let input = document.getElementById("grid_size").value; //Gets value of inputted text
    let final_input =validateInput(input);

    return final_input;
}



function validateInput(input){
    let message = document.querySelector("#message");
    if (input < 0 || input > 100){
        message.textContent = "Enter a Number between 1 & 100"
    }else if(input == ""){/* Keeps placeholder message*/} 
    else{message.textContent= "Commence Game"
    return input;
    }

}


function createGrid(size){
    let grid = document.querySelector(".grid_container");

    //Styles the grid container's rows & coloumns
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`; //Grid in css: Created 16 coloumns of width= 1 fractional unit
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;//16 rows of height = 1 fractional unit

    let totalSize = size * size;

    //Fills the styled rows & columns with objects (divs)
    for (let i = 0; i < totalSize; i++){ 
        let div = document.createElement("div");
        div.style.backgroundColor = "orange";
        grid.insertAdjacentElement("beforeend", div); //Creates a new div inside the grid, right after a past div is created
    }
}
