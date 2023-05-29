
Algoritmo super_Adivina
	
	Escribir "Adivina número del 1 al 10: "
	Leer nUser
	nMaquina = 6
	Si (nUser == nMaquina) Entonces
		Escribir "Adivinaste!!"
	SiNo
		Si (nMaquina > nUser) Entonces
			Escribir "Era más alto"
		SiNo
			Escribir "Era más bajo"
		FinSi
		Escribir "El número era: ", nMaquina
	FinSi
	
FinAlgoritmo
