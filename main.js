function multiply()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    result = document.getElementById("result").innerHTML = num1 * num2;
    console.log(result);
}