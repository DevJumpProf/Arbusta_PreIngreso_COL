Algoritmo AdivinaNumero
	
	Definir nAzar, nUser, intentos Como Entero
	
	// Generar un número aleatorio entre 1 y 10
	nAzar <- Aleatorio(1, 10)
	
	intentos <- 3
	
	Escribir "Adivina un número del 1 al 10. Tienes ", intentos, " intentos."
	
	Mientras nAzar <> nUser Y intentos > 0 Hacer
		Escribir "Ingresa un número:"
		Leer nUser
	FinMientras
	
		Si nUser < nAzar Entonces
			Escribir "Tu número es muy bajo."
		FinSi
		
	
		Si nUser > nAzar Entonces
				Escribir "Tu número es muy alto."
			
				intentos <- intentos - 1
			SiNo 
			
				Escribir "Te quedan ", intentos, " intentos."
		FinSi
			
		Si nAzar = nUser Entonces
			Escribir "¡Adivinaste! El número era ", nAzar
		SiNo
			Escribir "¡Perdiste! Se te acabaron los intentos. El número era: ", nAzar
		FinSi
		
FinAlgoritmo
