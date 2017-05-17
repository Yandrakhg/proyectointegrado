const REF = firebase.database();
    
function crearPersona(user){
    var usuario= REF.ref('Usuarios');
    usuario.push(user);
}
    
function insertarPersona(newPersona, uid){
    newPersona.id= uid;
    crearPersona(newPersona)
}

function cambioTraje(img){
	// Accion por defecto para Buttons;
	switch(img){
	   case "pImg1a":
                      var foto1a=document.getElementById('pImg1').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FDustinP.jpg?alt=media&token=72dd9a8e-bcad-4c5c-be21-652f50ab55d3";    
                      break;
	   case "pImg1b":
                      var foto1b=document.getElementById('pImg1').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FDusstinCuerpoG.jpg?alt=media&token=d12592bb-021a-48fe-b4df-8b3706f875cd";
                      break;
	   case "pImg1c":
                      var foto1c=document.getElementById('pImg1').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FDustinFrenteG.jpg?alt=media&token=de1bf4fe-565c-438f-a1f0-fb0f20fadb09";
                      break;
       case "pImg1d":
                      var foto1c=document.getElementById('pImg1').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FdustinEspaldaG.jpg?alt=media&token=c972cd88-ba3c-417d-8f8f-4324fa4efaf5";
                      break;
       case "pImg2a":
                      var foto2a=document.getElementById('pImg2').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FPalP.jpg?alt=media&token=91a1dc82-178e-4c00-8d1b-caa18dbf7f46";    
                      break;
	   case "pImg2b":
                      var foto2b=document.getElementById('pImg2').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FPalEspaldaG.jpg?alt=media&token=e6cc5a36-39fe-4626-b40f-433cf6cb165f";
                      break;
	   case "pImg2c":
                      var foto2c=document.getElementById('pImg2').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FPalPantalonesFG.jpg?alt=media&token=9f88e83d-2c84-401f-adfa-bedb296a4fab";
                      break;
       case "pImg2d":
                      var foto2c=document.getElementById('pImg2').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FPalPantalonesEG.jpg?alt=media&token=818aeffb-3ceb-4947-918f-614405b34f63";
                      break;
       case "pImg3a":
                      var foto3a=document.getElementById('pImg3').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FRobertoP.jpg?alt=media&token=771941e4-231f-4844-a0bd-0ce49b9fb1c9";    
                      break;
	   case "pImg3b":
                      var foto3b=document.getElementById('pImg3').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FRobertoEspaldaG.jpg?alt=media&token=a732589d-15fb-4e95-8796-532cd4730b21";
                      break;
	   case "pImg3c":
                      var foto3c=document.getElementById('pImg3').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FRobertoPantalonesFG.jpg?alt=media&token=dcd4b48f-ec0a-4b17-a855-0490142b0a85";
                      break;
       case "pImg3d":
                      var foto3c=document.getElementById('pImg3').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FRobertoPantalonTG.jpg?alt=media&token=8bad6cdb-0271-4973-a6aa-6c127cb38ee3";
                      break;
       case "pImg4a":
                      var foto4a=document.getElementById('pImg4').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FFormulaP.jpg?alt=media&token=47cd937a-4068-4dd8-ba3b-b038a55ddb43";    
                      break;
	   case "pImg4b":
                      var foto4b=document.getElementById('pImg4').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FformulaEspaldaG.jpg?alt=media&token=ffac9f64-1b77-421b-8c73-e6bffa7cc8fa";
                      break;
	   case "pImg4c":
                      var foto4c=document.getElementById('pImg4').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FformulaFrontalG.jpg?alt=media&token=98ba7f9d-cb64-4ff7-91f7-26e15c2939bb";
                      break;
       case "pImg4d":
                      var foto4c=document.getElementById('pImg4').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FformulaCuerpoG.jpg?alt=media&token=9037747e-6a01-4b1e-9ff1-253f07f2d00a";
                      break;
       case "pImg5a":
                      var foto5a=document.getElementById('pImg5').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FTommyP.jpg?alt=media&token=8b6bdff3-c43d-406d-af3b-c2fe796acae2";    
                      break;
	   case "pImg5b":
                      var foto5b=document.getElementById('pImg5').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FTommyEspaldaG.jpg?alt=media&token=7a5c63c5-2c9c-404b-a33a-9684c096c85f";
                      break;
	   case "pImg5c":
                      var foto5c=document.getElementById('pImg5').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FTommyFrontalG.jpg?alt=media&token=1c9802ca-6ceb-4018-82fd-4e2aa3f1585e";
                      break;
       case "pImg5d":
                      var foto5c=document.getElementById('pImg5').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FTommyCuerpoG.jpg?alt=media&token=38c821da-b0d2-4f29-9446-d4c028a6306a";
                      break;
       case "pImg6a":
                      var foto6a=document.getElementById('pImg6').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FeasyP.jpg?alt=media&token=61c35384-2822-4a56-8849-ce7f513f811e";    
                      break;
	   case "pImg6b":
                      var foto6b=document.getElementById('pImg6').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FeasyEspaldaG.jpg?alt=media&token=251ad3ca-e573-4227-9728-0a85917a1187";
                      break;
	   case "pImg6c":
                      var foto6c=document.getElementById('pImg6').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FeasyCuerpoG.jpg?alt=media&token=e6fcae8b-1b91-4c51-8b9b-71d04b9cef6f";
                      break;
       case "pImg6d":
                      var foto6c=document.getElementById('pImg6').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FeasyFrontalG.jpg?alt=media&token=84f6e08d-25fe-4b95-b7f8-44f83cb979eb";
                      break;
       case "pImg7a":
                      var foto7a=document.getElementById('pImg7').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FEmilioP.jpg?alt=media&token=eff5a670-22c3-4179-9b48-4530157595db";    
                      break;
	   case "pImg7b":
                      var foto7b=document.getElementById('pImg7').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FEmilioEspaldaG.jpg?alt=media&token=13e8a447-1918-4b35-980c-fc5e293cf35b";
                      break;
	   case "pImg7c":
                      var foto7c=document.getElementById('pImg7').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FEmillioPantalonesG.jpg?alt=media&token=611f7cef-571f-4bd0-b11f-957435a69838";
                      break;
      case "pImg7d":
                      var foto7c=document.getElementById('pImg7').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FEmilioPantalonesTG.jpg?alt=media&token=8470c1f7-7b0b-4ee3-bad1-6854565b18ad";
                      break;              
       case "pImg8a":
                      var foto8a=document.getElementById('pImg8').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2Fprueba.jpg?alt=media&token=909c4df4-741c-4d01-b591-4ef881738998";    
                      break;
	   case "pImg8b":
                      var foto8b=document.getElementById('pImg8').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FDustin%20EspaldaG.jpg?alt=media&token=7b476361-5f0d-46c9-8d59-0dc0a5782818";
                      break;
	   case "pImg8c":
                      var foto8c=document.getElementById('pImg8').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FDustinPantalonG.jpg?alt=media&token=ffcc1d91-1b1f-482f-bc0e-e32ebeb6d59f";
                      break;
       case "pImg8d":
                      var foto8c=document.getElementById('pImg8').src= "https://firebasestorage.googleapis.com/v0/b/proyectoeventos-53630.appspot.com/o/Trajes%20Alejandro%2FDustinPantalonEG.jpg?alt=media&token=0d6c63ba-24e3-4da3-ab1b-deaf5be638d1";
                      break;
    } 
}