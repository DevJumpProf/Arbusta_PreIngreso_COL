Algoritmo super_Adivina
	
	Escribir "Elija un numero del 1 al 10"
	Leer nUser
	
	nMaquina = 6
	
	Si (nUser == nMaquina ) Entonces
		Escribir "Adivinaste!!"
	SiNo
		si (nMaquina > nUser) Entonces
			Escribir "Era m�s alto"
		SiNo
			Escribir "Era m�s bajo"
			
		FinSi
		Mostrar "El n�mero era: " , nMaquina
	FinSi
	
	
	
FinAlgoritmo
