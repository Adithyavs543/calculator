// function displayValue(num){
//     let res=document.querySelector("#result");
//     res.value+=num
// }
var displayValue=(num)=>result.value+=num;

// function clearBox(){
//     result.value=""
// }
var clearBox=()=>result.value=""

function evaluateExpression(){
    let expr=result.value;
    let output=eval(expr)
    result.value=output;
}
// var evaluateExpression=()=>result.value=eval(result.value)






