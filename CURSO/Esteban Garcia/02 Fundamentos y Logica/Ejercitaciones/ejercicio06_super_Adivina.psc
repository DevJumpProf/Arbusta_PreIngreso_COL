Algoritmo super_Adivina
	
	//Ejercicio:  Realizar un programa que llamado super_Adivina
	//Pida un numero del 1 al 10;
	//Guardar ese numero en la variable: nUser
	//Crear la variable nMaquina y asignarle el valor numerico 6
	//utilizar la estructura si/entonces
	//Si nUser es igual al nMaquina
	//Mostrar "Adivinaste!!"
	//Si el nMaquina es mayor al nUser
	//Mostrar "Era m�s alto"
	//SiNo
	//Mostrar "Era m�s bajo"
	//De no adivinar ademas del mensaje "Era m�s alto" o "Era m�s bajo",
	//Mostrar "El n�mero era: " , nMaquina
	
	Definir nUser Como Entero
	Escribir "Adivina el numero del 1 al 10"
	Leer nUser
	
	nMaquina = 6
	
	Si (nUser == nMaquina) Entonces
		Mostrar "Adivinaste"
	SiNo
		Si nUser < nMaquina Entonces
			Mostrar "Era m�s alto"
		SiNo
			Mostrar "Era m�s bajo"
		Fin Si
		Mostrar "El numero era: ", nMaquina
	Fin Si


FinAlgoritmo
