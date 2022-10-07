function infoFondos(){
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
       
       console.log("Resultados de cotizacion de fondos de ayer" + " / " + "%" + fondoBonos1 + "/" +"%"+fondoEquilibrado + "/" + "%" + fondoArgenx +"/"+ "%" + fondoLeliq)
       }
       infoFondos() 
       
       
       var inversion = Number(prompt("Depositar inversion"))
   
      
   
       var saldo = 0
       
       //----------------------------------------------------------------------------------------------------    
       
       var elegirFondo = prompt("Elegir un fondo del 1 al 4")
   
       
       function infoFondos2(){
       const fondos2 = [fondoBonos1 = (Math.random() * (10 - 1) - 1).toFixed(3),
        fondoEquilibrado = (Math.random() * (10 - 1) - 1).toFixed(3),    
        fondoArgenx = (Math.random() * (10 - 1) - 1).toFixed(3),
        fondoLeliq = (Math.random() * (10 - 1) - 1).toFixed(3)]
        
        
        alert("1-" + "Cotizacion de hoy" + " " + "Bonos1" + " = " + fondos2[0])
        alert("2-" + "Cotizacion de hoy" + " " + "Fondo Equilibrado" + " = " + fondos2[1])
        alert("3-" + "Cotizacion de hoy" + " " + "Fondo Argenx" + " = " + fondos2[2])
        alert("4-" + "Cotizacion de hoy" + " " + "Fondo Leliq" + " = " + fondos2[3])
        
        var resultUno = (inversion*fondoBonos1)/100
        var resultDos = (inversion*fondoEquilibrado)/100
        var resultTres = (inversion*fondoArgenx)/100
        var resultCuatro = (inversion*fondoLeliq)/100
             
        if(elegirFondo == 1) {
              saldo = resultUno + inversion
               alert("El resultado de su inversion fue"+"= $"+ resultUno.toFixed(3))
        }else if(elegirFondo == 2){
              saldo = resultDos + inversion
               alert("El resultado de su inversion fue"+"= $"+ resultDos.toFixed(3))
        }else if(elegirFondo == 3){ 
              saldo = resultTres + inversion
               alert("El resultado de su inversion fue"+"= $"+ resultTres.toFixed(3))
        }else if(elegirFondo == 4){
              saldo = resultCuatro + inversion
               alert("El resultado de su inversion fue"+"= $"+ resultCuatro.toFixed(3))
        }else{
           alert("Elegir un fondo del 1 al 4")
        }  
       
       console.log("Resultados de cotizacion de fondos de hoy" + " / " + "%" + fondoBonos1 + "/" + "%" + fondoEquilibrado + "/" + "%" + fondoArgenx +"/"+ "%" + fondoLeliq)
       
       alert("Saldo Actual" + " =" + saldo)
       
       }
       infoFondos2()
     

   //---------------------------------------------------------------------------------------------------
       console.log("Su saldo es de " + " =" + "$" + saldo)
        

       var deposito = prompt("Desea agregar capital a su inversion? Deposite un monto")
       var nuevoSaldo = 0
          

       function depositar(){   
          
           if(deposito > 0 ){       
           nuevoSaldo = parseFloat(saldo) + parseFloat(deposito) 
           }else{
               console.log("No se realizo deposito")
           }
           console.log("Saldo Actual" + "=" + parseFloat(nuevoSaldo))
            alert("Saldo Actual" + " =" + parseFloat(nuevoSaldo))
             return nuevoSaldo
       }
       depositar()      
          
       //---------------------------------------------------------------------------------     
   
       var seguir = prompt("Desea seguir invirtiendo / escriba 'si' o 'no' ")

       function seguirOno(){
            if(seguir === "si"){
            alert("Seguimos Invirtiendo")  
            }else{
             infoFondos() 
            }
       }
       seguirOno() 

       //---------------------------------------------------------------------------------

       var elegirFondo = prompt("Elegir un fondo del 1 al 4")
   
       function infoFondos3(){
   
           const fondos2 = [fondoBonos1 = (Math.random() * (10 - 1) - 1).toFixed(3),
            fondoEquilibrado = (Math.random() * (10 - 1) - 1).toFixed(3),    
            fondoArgenx = (Math.random() * (10 - 1) - 1).toFixed(3),
            fondoLeliq = (Math.random() * (10 - 1) - 1).toFixed(3)]
            
            
            alert("1-" + "Cotizacion de hoy" + " " + "Bonos1" + " = " + fondos2[0])
            alert("2-" + "Cotizacion de hoy" + " " + "Fondo Equilibrado" + " = " + fondos2[1])
            alert("3-" + "Cotizacion de hoy" + " " + "Fondo Argenx" + " = " + fondos2[2])
            alert("4-" + "Cotizacion de hoy" + " " + "Fondo Leliq" + " = " + fondos2[3])
            
            var resultUno = (inversion*fondoBonos1)/100
            var resultDos = (inversion*fondoEquilibrado)/100
            var resultTres = (inversion*fondoArgenx)/100
            var resultCuatro = (inversion*fondoLeliq)/100
           
            
           
            if(elegirFondo == 1) {
                  nuevoSaldoUno = resultUno + nuevoSaldo
                   alert("El resultado de su inversion fue"+"= $"+ resultUno.toFixed(3))
            }else if(elegirFondo == 2){
                   nuevoSaldoUno = resultDos + nuevoSaldo
                   alert("El resultado de su inversion fue"+"= $"+ resultDos.toFixed(3))
            }else if(elegirFondo == 3){ 
                   nuevoSaldoUno = saldo + nuevoSaldo
                   alert("El resultado de su inversion fue"+"= $"+ resultTres.toFixed(3))
            }else if(elegirFondo == 4){
                   nuevoSaldoUno = resultCuatro + nuevoSaldo
                   alert("El resultado de su inversion fue"+"= $"+ resultTres.toFixed(3))
            }else{
               alert("Elegir un fondo del 1 al 4")
            }  
                 
           
       }
       infoFondos3()
       
       //---------------------------------------------------------------------------------------------------
   
       console.log("Resultados de cotizacion de fondos de hoy" + " / " +"%"+ fondoBonos1 + "/" +"%"+ fondoEquilibrado + "/" +"%"+ fondoArgenx +"/"+"%"+ fondoLeliq)
           
       alert("Saldo Actual" + " =" + "$"+ nuevoSaldoUno)
           
          
       var extraccion = prompt("Desea extraer capital? coloque monto o teclee el numero 0 en caso que no. ")
       var nuevoSaldoDos = 0
       
       function extraer(){
              
             if(extraccion <= nuevoSaldo){
              nuevoSaldoDos = parseFloat(nuevoSaldoUno) - parseFloat(extraccion)
              }else if(extraccion == 0){
                    alert("No retira capital")
              }else{ console.log("error")}
       }
       extraer()
       
       alert("Su Saldo es de"+"="+"$"+ nuevoSaldoDos) 
       console.log("Su Saldo es de" + "=" + "$" + nuevoSaldoDos)
       console.log("Su inversion fue de " + "=" + "$" + inversion)
       console.log("Realizo un deposito de " + "=" + "$" + deposito)
       console.log("Realizo una extraccion de" + "=" + "$" + extraccion)

       