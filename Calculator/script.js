const add = document.getElementById("add-btn");
const subtract = document.getElementById("subtract-btn");
const multiply = document.getElementById("multiply-btn");
const divide = document.getElementById("divide-btn");
const result = document.getElementById("result");

function getInputs()
{
    return {
        num1: Number(document.getElementById("num1").value),
        num2: Number(document.getElementById("num2").value)
    };
}

add.addEventListener("click", function(){
    let inputs = getInputs();
    result.textContent = inputs.num1 + inputs.num2;
});

subtract.addEventListener("click", function(){
    let inputs = getInputs();
    result.textContent = inputs.num1 - inputs.num2;
});

multiply.addEventListener("click", function(){
    let inputs = getInputs();
    result.textContent = inputs.num1 * inputs.num2;
});

divide.addEventListener("click", function(){
    let inputs = getInputs();
    if(!inputs.num2)
    {
        alert("Cannot be divided by 0!");
        return;
    }
    result.textContent = (inputs.num1 / inputs.num2).toFixed(2) + "2 d.p.";
});