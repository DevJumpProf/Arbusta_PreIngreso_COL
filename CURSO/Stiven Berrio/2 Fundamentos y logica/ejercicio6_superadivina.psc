Algoritmo ejercicio6_superadivina
	
	definir numerosecreto como entero
	
	Escribir "Escoge un numero del 1 al 10"
	Leer numerousuario
	
	numerosecreto = 2
	
	Si (numerousuario == numerosecreto ) Entonces
		Escribir "Super bien, acertaste."
	SiNo
		si (numerosecreto > numerousuario) Entonces
			Escribir "falto poco, más alto"
		SiNo
			Escribir "casi, más bajo"
			
		FinSi
		Mostrar "El número era: " , numerosecreto
	FinSi
	
	
FinAlgoritmo
