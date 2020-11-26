var result = document.getElementById('result_final');

// for adding keyboard functionality
document.addEventListener('keypress', function(event) {
    if (event.defaultPrevented) {
        return;
    }
    var key = event.key || event.keyCode;
    calc(key);
});

function calc(key) {
  //   Keys which are allowed to show in input are stored below
    var allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '(', ')', '.', 'C'];
    var expression;

    if (key === 'Enter') {
        answer(expression);
        return;
    }
  
    // to use 'Delete' key as Backspace
    if (key === 'Delete'){
        backspace();
    }
    
    if (allowedKeys.includes(key)) {
        display(key);
    }
    
}

function display(key) {
    result.value += key;
    
    // to use 'C' as clear
    if (key === 'C') {
        result.value = "";
        return false;
    }    
}

function backspace() {
    var num = result.value;
    var len = num.length - 1;
    result.value = num.substring(0, len);
}

function signChange() {
    var plus = result.value;
    var new_num = plus * -1;
    result.value = new_num;
}

//executed when equals to btn is clicked
function answer(expression) {
    var temp=0;
    expression = result.value;
    if (expression != "") {
   // if there is no input, this is to prevent undefined
   // from showing in the text field
        try {
            temp = eval(expression);
            result.value = temp;
        } catch (error) {
            result.value = "Syntax error";
        }
    }
}

function sin(temp) {
    temp = result.value;
    temp = Math.sin(temp * Math.PI / 180);
    result.value = temp;
}

function cos(temp) {
    temp = result.value;
    temp = Math.cos(temp * Math.PI / 180);
    result.value = temp;
    
}

function tan(temp) {
    temp = result.value;
    temp = Math.tan(temp * Math.PI / 180);
    result.value = temp;
}

function log(temp) {
    temp = result.value;
    if (temp != "") {
        temp = Math.log10(temp);
        result.value = temp;
    }
}

function exponent(temp) {
    temp = result.value;
    temp = Math.exp(temp);
    result.value = temp;
}

function percent() {
    var val = 0.0;
    val = result.value;
    result.value = val * 0.01;
}

const pie = 3.142;

function piev(temp) {
    if (result.value == ''){
        result.value = Math.PI;
    }
    else {
        temp = result.value;
        result.value = temp * pie;
    }
}

function squarert(temp) {
    temp = result.value;
    temp = Math.sqrt(temp);
    result.value = temp;
}

function fact(temp){
    temp = result.value;
    var ans = 1;
    for (var i = 0; i < temp; i++) {
        ans *= (temp - i);
    }
    result.value = ans;
}
