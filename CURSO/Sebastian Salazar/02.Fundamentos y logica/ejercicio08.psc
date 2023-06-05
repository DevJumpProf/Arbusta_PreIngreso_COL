Algoritmo ejercicio08
	Definir nAzar, nUser, intentos Como Entero
	
    nAzar <- Aleatorio(1, 10)
    intentos <- 3
	
    Escribir "Adivina un número del 1 al 10. Tienes:", intentos, "intentos."
	
    Mientras nAzar <> nUser Y intentos > 0 Hacer
        Escribir "Ingresa un número:"
        Leer nUser
	
        Si (nUser < nAzar) Entonces
            Escribir "Tu número es muy bajo." 
		FinSi
	
		 si nUser > nAzar Entonces
				Escribir "Tu número es muy alto."
			FinSi
			
			intentos <- intentos - 1
			Escribir "Te quedan", intentos, "intentos."
		
		
		Si nAzar = nUser Entonces
			Escribir "¡Adivinaste! El número era", nAzar
		Sino
			Escribir "¡Perdiste! Se te acabaron los intentos. El número era:", nAzar
		FinSi
	FinMientras
FinAlgoritmo
