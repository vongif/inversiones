
function infoFondo(){
let fondos = [fondoBonos1 = (Math.random() * (10 - 1) - 1).toFixed(3),
 fondoEquilibrado = (Math.random() * (10 - 1) - 1).toFixed(3),    
 fondoArgenx = (Math.random() * (10 - 1) - 1).toFixed(3),
 fondoLeliq = (Math.random() * (10 - 1) - 1).toFixed(3)]
 
 for(  let fondo of fondos ){ 
alert("1-" + "Cotizacion de ayer" + " " + "Bonos1" + " = " + fondos[0])
alert("2-" + "Cotizacion de ayer" + " " + "Fondo Equilibrado" + " = " + fondos[1])
alert("3-" + "Cotizacion de ayer" + " " + "Fondo Argenx" + " = " +fondos[2])
alert("4-" + "Cotizacion de ayer" + " " + "Fondo Leliq" + " = " + fondos[3])
break }

console.log("Resultados de cotizacion de fondos de ayer" + " / " + fondoBonos1 + "/" + fondoEquilibrado + "/" + fondoArgenx +"/"+ fondoLeliq)
 }
infoFondo() 


var inversion = Number(prompt("Depositar inversion"))
var saldo = 0

//----------------------------------------------------------------------------------------------------



var elegirFondo = prompt("Elegir un fondo del 1 al 4")

const fondos2 = [fondoBonos1 = (Math.random() * (10 - 1) - 1).toFixed(3),
 fondoEquilibrado = (Math.random() * (10 - 1) - 1).toFixed(3),    
 fondoArgenx = (Math.random() * (10 - 1) - 1).toFixed(3),
 fondoLeliq = (Math.random() * (10 - 1) - 1).toFixed(3)]
 
 
 alert("1-" + "Cotizacion de hoy" + " " + "Bonos1" + " = " + fondoBonos1)
 alert("2-" + "Cotizacion de hoy" + " " + "Fondo Equilibrado" + " = " + fondoEquilibrado)
 alert("3-" + "Cotizacion de hoy" + " " + "Fondo Argenx" + " = " + fondoArgenx)
 alert("4-" + "Cotizacion de hoy" + " " + "Fondo Leliq" + " = " + fondoLeliq)
 
 var resultUno = (inversion*fondoBonos1)/100
 var resultDos = (inversion*fondoEquilibrado)/100
 var resultTres = (inversion*fondoArgenx)/100
 var resultCuatro = (inversion*fondoLeliq)/100

 

 if(elegirFondo == 1) {
       var saldo = resultUno + inversion
        alert("El resultado de su inversion fue"+"= $"+ resultUno.toFixed(3))
 }else if(elegirFondo == 2){
        var saldo = resultDos + inversion
        alert("El resultado de su inversion fue"+"= $"+ resultDos.toFixed(3))
 }else if(elegirFondo == 3){ 
        var saldo = saldo + inversion
        alert("El resultado de su inversion fue"+"= $"+ resultTres.toFixed(3))
 }else if(elegirFondo == 4){
        var saldo = resultCuatro + inversion
        alert("El resultado de su inversion fue"+"= $"+ resultTres.toFixed(3))
 }else{
    alert("Elegir un fondo del 1 al 4")
 }  
 


//---------------------------------------------------------------------------------------------------

console.log("Resultados de cotizacion de fondos de hoy" + " / " + fondoBonos1 + "/" + fondoEquilibrado + "/" + fondoArgenx +"/"+ fondoLeliq)

alert("Saldo Actual" + " =" + saldo)




 
var deposito = prompt("Desea agregar capital a su inversion? Deposite un monto")
 var nuevoSaldo = 0

function depositar(){   
             
       if (deposito > 0) {
       nuevoSaldo = parseFloat(saldo) + parseFloat(deposito)       
       
      } else {
        console.log("No realizo deposito")
      }  
}
depositar()      

console.log("Saldo Actual" + "=" + parseFloat(nuevoSaldo))
alert("Saldo Actual" + " =" + parseFloat(nuevoSaldo))


//----------------------------------------------------------------------------

infoFondo()
alert("Saldo Actual" + " =" + parseFloat(nuevoSaldo))

var extraccion = prompt("Desea extraer capital? coloque monto o teclee el numero 0 en caso que no. ")
var nuevoSaldoUno = 0

function extraer(){
       
      if(extraccion <= nuevoSaldo){
       nuevoSaldoUno = parseFloat(nuevoSaldo) - parseFloat(extraccion)
       }else if(extraccion == 0){
             alert("No retira capital")
       }else{ console.log("error")}
}
extraer()

alert("Su Saldo es de"+"="+"$"+nuevoSaldoUno) 
console.log("Su Saldo es de"+"="+"$"+nuevoSaldoUno)