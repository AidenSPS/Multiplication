/* Function to run whichever loop we picked */
var questions = parseInt(localStorage.getItem("questions"));
var max = parseInt(localStorage.getItem("max"));
var min = parseInt(localStorage.getItem("min"));
var errors = [];
var questionNum = 1;
var x = 0;
var y = 0;
var product = 0;


function startLoop(){
    // alert(questions+"-"+max+"-"+min);
    uiLoop(); //Not displaying the current question. (on question two, is saying Question one of two).
    askQuestion();
    forLoop();
}

function uiLoop(){ //This function loads the page
    let question = questionNum; 
    let interface = document.getElementById("interface");
    let oldButton = document.getElementById("beginQuiz");
    oldButton.remove();


    // Question Box aka "Question 1 of 2"
    const questionBox = document.createElement("div");
    questionBox.innerText = "Question "+question+" of "+questions;
    interface.appendChild(questionBox);


    // Displaying the question
    const questDisplay = document.createElement("div");
    questDisplay.innerText = askQuestion(); //This line is where the display of the question resides, takes the second pop-up question from stubArray and displays that, need to do for second value. 
    interface.appendChild(questDisplay);


    // Answer Box
    const answerBox = document.createElement("input");
    answerBox.setAttribute('id','answer');
    interface.appendChild(answerBox);

    // Displaying the button
    const button = document.createElement("button");
    button.setAttribute('id','submit');
    button.setAttribute('onClick','getAnswer()');
    button.innerText = "Submit Answer";
    interface.appendChild(button);
}


function askQuestion(){//Sets random values for x and y and returns answer when called. The whole point of this function, is to randomize the values and return answer. 
    x = Math.floor(Math.random() * (max - min + 1)) + min;
    y = Math.floor(Math.random() * (max - min + 1)) + min;
    let answer = x + " X " + y +" = ?";
    let stub = [x,y]; //Stub to display answers, getting two values on load?, not displaying the correct value, the value that is the equation is the second one. 
    alert(stub);
    return answer;
}


function getAnswer(){
    //alert("Got it!");
    let answerBox = document.getElementById("answer");
    let userAnswer = parseInt(answerBox.value);
    product = (x * y);
    if(userAnswer == product){
        alert("Correct, the answer is "+product);
        askQuestion();
    }
    else{
        alert("Incorrect, "+x+" X "+y+" = "+product);
        errors.push([x,y]);
        askQuestion();
    }
    questionNum++;
    if(questionNum <= questions){
        uiLoop();
    }
    else{
        interface.innerHTML = "All Done";
    }
}



function forLoop(){
    for (let question = 1; question <= questions; question++) {
        let error = [0,0,0];
        if (error[0] > 0) {
            error.splice(0,1);
            errors.push(error);
            alert(errors.join("\n"));
        }
    }
}