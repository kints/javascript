init();
var operando = false;
var operador = '';
var num1="0";
var num2='';
var formula = '';
var diplayField;
function init()
{
  displayField = document.getElementById("display");
  teclas = document.getElementsByClassName("tecla suma");
  for (var teclaSola in teclas) {
    teclas[teclaSola].onmousedown = function(){
      this.style.width = "80%";
      introNumero(this.alt)
    }
    teclas[teclaSola].onmouseup = function(){
    this.style.width = "90%";
    }
}
  teclas = document.querySelectorAll(".teclado>.row>.col1>.tecla");
  for (var teclaSola in teclas) {
    teclas[teclaSola].onmousedown = function(){
      this.style.width = "25%";
      introNumero(this.alt)
    }
    teclas[teclaSola].onmouseup = function(){
    this.style.width = "29%";

    }
  }
teclas = document.querySelectorAll(".teclado>.tecla");
for (var teclaSola in teclas) {
  teclas[teclaSola].onmousedown = function(){
    this.style.width = "20%";
    introNumero(this.alt)
  }
  teclas[teclaSola].onmouseup = function(){
  this.style.width = "22%";
  }
}

}

function introNumero( numero)
{
  if (num1.length < 8)
  {
    checar = numero;
    switch (checar) {
      case "por":
      case "menos":
      case "mas":
      case "dividido":
      case "igual":
        operacion(checar);
        return;
      break;
      case "On":
        num1 = "0";
      break;
      case "punto":
      esta = num1.indexOf('.')
        if( esta == -1)
        {
          num1 += ".";
        }

      break;
      case "signo":
      if(num1.charAt(0) != "0")
      {
        if (num1.charAt(0) == "-")
        {
          num1 = num1.substring(1,num1.length);
        }
        else {
          num1 = "-"+num1;
        }
      }
      break;
      default:
        checarNum = parseInt(checar);
        if(Number.isFinite(checarNum))
        {
          if (Number(num1) == 0  & checarNum == 0)
          {
            num1 = "0";
          }
          else
          {
            if(num1.charAt(0) == "0")
            {
              num1 = numero;
            }
            else {
              num1 += numero;
            }
          }
        }
      break;
    }
    mostrarDisplay(num1);
  }
}
function mostrarDisplay(mostrarValor)
{
  displayField.innerHTML = mostrarValor;
}
function operacion(operando)
{
  if(num2 == "")
  {
    num2 = num1;
  }
  localnum1 = num1;
  introNumero("On");
  switch (operando) {
    case "por":
      operaror = "*";
    break;
    case "menos":
      operaror = "-";
    break;
    case "mas":
      operaror = "+";
    break;
    case "dividido":
      operaror = "/";
    break;
    case "igual":
      if (num1 == "")
      {
        break;
      }
      else {
        formula = num2+operaror+localnum1;
        valor = eval(formula);
        mostrarDisplay(valor);
        num1 = "";
        num2 = "";
        operaror = "";
      }
      break;
    default:
    break;
  }
}
