Algoritmo ejercicio_8
	
	nAzar = Aleatorio(1,10)
	
	intentos = 3
	
	EnElIntendoQueVa = 1
	
	Escribir  "Usted tiene los siguientes numero de intentos :" , intentos
	
	Leer nUser
	
	Si nAzar ==nUser Entonces
		Mostrar "haz adivinado el numero"
	SiNo
		Mientras EnElIntendoQueVa < intentos Hacer
			Si nAzar >nUser Entonces
				Mostrar " Tu numero es mas bajo"
				EnElIntendoQueVa = EnElIntendoQueVa + 1
				leer nUser 
			SiNo
				Mostrar " Tu numero es mas alto"
				EnElIntendoQueVa = EnElIntendoQueVa + 1 
				
				
				
				
			Fin Si
		Fin Mientras
		Mostrar "fallaste en el total de intentos"
	Fin Si
	
FinAlgoritmo
