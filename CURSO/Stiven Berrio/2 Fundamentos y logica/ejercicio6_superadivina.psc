Algoritmo ejercicio6_superadivina
	
	definir numerosecreto como entero
	
	Escribir "Escoge un numero del 1 al 10"
	Leer numerousuario
	
	numerosecreto = 2
	
	Si (numerousuario == numerosecreto ) Entonces
		Escribir "Super bien, acertaste."
	SiNo
		si (numerosecreto > numerousuario) Entonces
			Escribir "falto poco, m�s alto"
		SiNo
			Escribir "casi, m�s bajo"
			
		FinSi
		Mostrar "El n�mero era: " , numerosecreto
	FinSi
	
	
FinAlgoritmo
