// the function
function checkAnswer(){
    // variable named correct answer
    const correctAnswer = "4";
    // select the checked radio button by its name.
    const radio_button = document.querySelector('input[name="quiz"]:checked');
    // the users anwer
    const userAnswer =radio_button.value;
    // compare user answer with the correct answer
    if (userAnswer===correctAnswer){
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else if(userAnswer!==correctAnswer){
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    } 
}
// Adding event listener to submit button
document.getElementById("submit-answer").addEventListener('click', checkAnswer);

