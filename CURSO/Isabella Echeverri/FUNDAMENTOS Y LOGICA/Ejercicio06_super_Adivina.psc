Algoritmo super_Adivina
	
	Escribir "Elija un numero del 1 al 10"
	Leer nUser
	
	nMaquina = 6
	
	Si (nUser == nMaquina ) Entonces
		Escribir "Adivinaste!!"
	SiNo
		si (nMaquina > nUser) Entonces
			Escribir "Era más alto"
		SiNo
			Escribir "Era más bajo"
			
		FinSi
		Mostrar "El número era: " , nMaquina
	FinSi
	
	
	
FinAlgoritmo
