function getnum(number){
    var input = document.getElementById("calculate");
    input.value +=number;
    // console.log(number)
}

function clearResult(){
    var input = document.getElementById("calculate");
    input.value = "";
}

function getResult(){
    var input = document.getElementById("calculate");
    input.value = eval(input.value);
}