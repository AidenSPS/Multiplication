 /* This is where we print out the times tables */
var problemFactor;
function tables() {
    let factor = 0;
    let min = localStorage.getItem("min");
    let max = localStorage.getItem("max");
    if (problemFactor == undefined){
        problemFactor = localStorage.getItem("problemFactor");
    }
    else{
        problemFactor = 0;
    }
    let table = document.getElementById("table");
    if(problemFactor > 0){ 
        factor = problemFactor;
    }
    else{ 
        factor = prompt("Which table would you like to see");
    }

    let tableText = "Table for "+factor+"\n";
    for (let row = min; row <= parseInt(max); row++) {
        tableText += factor + " * " + row + " = " + factor * row + "\n";
    }
    table.innerText = tableText;
    let tableString = "Table for "+factor+"\n";
    for (let row = min; row <= parseInt(max); row++) { //Populating the table with the values using a for loop
        tableString += factor + " * " + row + " = " + factor * row + "\n";
    }
}
function restart(){
    let returnConf = confirm("Would you like to retry the quiz?");
    if(returnConf == true){
        document.location = 'setup.html';
    }
 */
}