Algoritmo ejercico06
	Definir nUser, nMaquina Como Entero
	
    Escribir "Ingrese un n�mero del 1 al 10:"
    Leer nUser
	
    nMaquina <- 6
	
    Si nUser = nMaquina Entonces
        Escribir "Adivinaste!!"
    Sino
        Si nMaquina > nUser Entonces
            Escribir "Era m�s alto"
        SiNo
            Escribir "Era m�s bajo"
        FinSi
        Escribir "El n�mero era:", nMaquina
    FinSi
	
FinAlgoritmo
