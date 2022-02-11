// CALCULADORA UTILIZANDO LOS PROMPT
var b = parseInt(prompt("Ingrese el primer numero"));
var a = parseInt(prompt("Ingrese el segundo numero"));

var opcion = parseInt (prompt("1- Suma \n 2- Resta \n 3- Multiplicacion \n 4- Division"));
switch(opcion){
  case 1: alert( a + b);
   break;
  case 2: alert( a - b);
    break;
  case 3: alert( a * b);
    break;
  case 4: alert( a / b);
    break;
  default:
    alert("Esta opcion no esta registrada");
    break;
   }

//----------------------------------------------------------------------------------------------------------

// CALCULADORA CON BOOtStRAP
// var n1 = document.getElementById("n1");
// var n2 = document.getElementById("n2");
// var r = document.getElementById("result");

// r.disabled = true;
// document.getElementById('btn_suma').addEventListener('click',
//  () => {
//   if (n1.value=="" || n2.value=="") {
//    alert("Ingrese los valores antes de realizar una operacion");
//   }else{
//    var Suma = parseInt (n1.value) + parseInt(n2.value);
//    r.value = Suma;
// }
//  });
// document.getElementById('btn_resta').addEventListener('click',
//   () => {
//   if (n1.value=="" || n2.value=="") {
//    alert("Ingrese los valores antes de realizar una operacion");
//   }else{
//     var Resta = parseInt (nl.value) - parseInt(n2.value);
//    r.value = Resta;
//     }
// });
// document.getElementById("btn_multiplicacion").addEventListener('click',
//     () => {
//    if (n1.value=="" || n2.value=="") {
//         alert("Ingrese los valores antes de realizar una operacion");
//    }else{
//         var Multiplicacion = parseint(n1.value) - parseInt(n2.value);
//          r.value - Multiplicacion;
//         }
//     });
// document.getElementById('btn_division').addEventListener ('click',
//  () =>{
//  if (n1.value=="" || n2.value=="") {
//         alert("Ingrese los valores antes de realizar una operacion");
//     }
//         else {
//        if (n2.value == "0") {
//            alert("No se puede dividir entre cero");
//         } 
//         else {
//            var Division = parseInt(nl.value) / parseInt(n2.value);
//            r.value = Division;
//         }
//     }
// });
// document.getelementsyId('btn_borrar').addEventListener('click',
//     () => {
//     if (n1.value=="" && n2.value==""){
//         alert("Los campos estan vacios, introduzca los valores"); }
//     else{
//         n1.value = null;
//         n2.value = null;
//         r.value = null;
//     }
// });