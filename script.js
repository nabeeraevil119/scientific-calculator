let display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}

function squareRoot(){
    display.value = Math.sqrt(display.value);
}

function power(){
    display.value = Math.pow(display.value, 2);
}

function sin(){
    display.value = Math.sin(display.value);
}

function cos(){
    display.value = Math.cos(display.value);
}

function tan(){
    display.value = Math.tan(display.value);
}

