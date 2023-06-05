Algoritmo Ejercicio_6
	
	Leer nUser
	
	nMaquina = 6
	
	textoAMostrarCorrecto = "Adivinaste";
	
	Si nUser == 6 Entonces
		Escribir textoAMostrarCorrecto
	SiNo
		Si nUser>nMaquina Entonces
			Imprimir " era mas bajo, " + "el numero es 6"
		SiNo
			Imprimir " era mas alto, " , "el numero es " , nMaquina
		Fin Si 
		
		
	Fin Si

	
	
	
FinAlgoritmo
