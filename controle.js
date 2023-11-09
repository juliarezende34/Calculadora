var num1 = "";
var num2 = "";
var displayTexto = "";
var op = "";
var memoria = 0;

function memoryAdd(){
    num1 = document.getElementById("displayTexto").innerHTML
    memoria = parseFloat(num1) + parseFloat(memoria) 
    ac();
    alert("Valor da memoria: "+memoria);
}

function memorySub(){
    num1 = document.getElementById("displayTexto").innerHTML
    memoria = parseFloat(memoria) - parseFloat(num1)
    ac();
    alert("Valor da memoria: "+memoria);
}

function memoryClear(){
    memoria = 0;
    ac();
    alert("Memoria limpa: " + memoria)
}

function memoryRead(){
    document.getElementById("displayTexto").innerHTML = memoria;
}

function numero(num){
    var texto = document.getElementById("displayTexto");
    displayTexto += num
    texto.innerHTML = displayTexto;
}

function ac(){
    displayTexto = ""
    document.getElementById("displayTexto").innerHTML = displayTexto;
    num1 = ""
    num2 = ""
}

function divisao(){
    num1 = document.getElementById("displayTexto").innerHTML
    displayTexto = ""
    document.getElementById("displayTexto").innerHTML = num1;
    op = "/"
    document.getElementById("/").style.backgroundColor = "red";
}

function multiplicacao(){
    num1 = document.getElementById("displayTexto").innerHTML
    displayTexto = ""
    document.getElementById("displayTexto").innerHTML = num1;
    op = "*"
    document.getElementById("x").style.backgroundColor = "red";
}

function soma(){
    num1 = document.getElementById("displayTexto").innerHTML
    displayTexto = ""
    document.getElementById("displayTexto").innerHTML = num1;
    op = "+"
    document.getElementById("+").style.backgroundColor = "red";
}

function subtracao(){
    num1 = document.getElementById("displayTexto").innerHTML
    displayTexto = ""
    document.getElementById("displayTexto").innerHTML = num1;
    op = "-"
    document.getElementById("-").style.backgroundColor = "red";
}

function maisMenos(){
    num1 = document.getElementById("displayTexto").innerHTML
    num1 = num1*(-1)
    document.getElementById("displayTexto").innerHTML = num1
}

function ponto(){
    displayTexto += "."
    document.getElementById("displayTexto").innerHTML = displayTexto
}

function igual(){
    if(op != ""){
        num2 = displayTexto
        if(op == "/"){
            document.getElementById("displayTexto").innerHTML = num1/num2 
            document.getElementById("/").style.backgroundColor = "lightsalmon";
        }
        if(op == "*"){
            document.getElementById("displayTexto").innerHTML = num1*num2 
            document.getElementById("x").style.backgroundColor = "lightsalmon";
        }
        if(op == "-"){
            document.getElementById("displayTexto").innerHTML = num1-num2 
            document.getElementById("-").style.backgroundColor = "lightsalmon";
        }
        if(op == "+"){
            document.getElementById("displayTexto").innerHTML = parseFloat(num1) + parseFloat(num2) 
            document.getElementById("+").style.backgroundColor = "lightsalmon";
        }
    }
    num1 = document.getElementById("displayTexto").innerHTML
}