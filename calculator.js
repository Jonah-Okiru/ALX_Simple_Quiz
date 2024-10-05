// Addition function
function add(number1, number2){
    return number1+number2;
}
// Add event listner to addition button
document.getElementById('add').addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) //0;
    const number2 = parseFloat(document.getElementById('number2').value) //0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
// Subtraction function
function Subtraction(number1, number2){
    return number2-number1;
}
// Add event listener to substraction function
document.getElementById('subtract').addEventListener('click', function(){
    const number1 =parseFloat(document.getElementById('number1').value);
    const number2 =parseFloat(document.getElementById('number2').value);
    const result = Subtraction(number1, number2);
    document.getElementById('calculation-result').textContent = result;
})
// Multiplication function
function multiply(number1, number2){
    return number1*number2;
}
// Add event listener to multiplication function
document.getElementById('multiply').addEventListener('click', function(){
    const number1 =parseFloat(document.getElementById('number1').value);
    const number2 =parseFloat(document.getElementById('number2').value);
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
})
// Add function for division
function divide(number1, number2) {
    return number2 / number1;
}
// Add eventlistner to divide function
document.getElementById('divide').addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;

})
