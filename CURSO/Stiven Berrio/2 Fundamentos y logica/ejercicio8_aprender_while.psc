Algoritmo ejercicio8_aprender_while
	
	Escribir "BIENVENIDO, juguemos..."
	
	Definir nAzar, nUser, intentos Como Entero
	
	nAzar = Aleatorio(1,10)
	intentos = 3
	
	Escribir "Adivina un numero del 1 al 10, tienes 3 intentos"
	Escribir "Ingresa un número: "
	Leer nUser
	
	Mientras (nAzar <> nUser) y (intentos <> 1) Hacer
		Si (nAzar > nUser)
			Escribir "Muy bajo"
		SiNo
			Escribir "Muy alto"
		FinSi
		intentos = intentos - 1
		Escribir "Te quedan 2 intentos:"
		Leer nUser
	FinMientras
	
	Si (nAzar == nUser) Entonces
		Escribir "Adivinaste, el número era: " , nAzar
	SiNo
		Escribir "Perdiste, el numero era: " . nAzar
	FinSi
	
FinAlgoritmo
