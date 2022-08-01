function GetNum(num){
    // console.log(num);
    var result = document.getElementById("result");
    result.value += num; 
}
function clearResult(){
    // console.log(num);
    var result = document.getElementById("result");
    result.value = ""; 
}
function getResult(){
    // console.log(num);
    var result = document.getElementById("result");
    result.value = eval(result.value); 
}



function getRoot(){
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value);
}
function sin(){
    var result = document.getElementById("result");
    result.value=Math.sin(result.value);
}
function cos(){
    var result = document.getElementById('result')
    result.value=Math.cos(result.value);
}
function tan(){
    var result = document.getElementById('result')
    result.value=Math.tan(result.value);
}
function pow(){
    var result = document.getElementById('result')
    result.value=Math.pow(result.value,2);
}