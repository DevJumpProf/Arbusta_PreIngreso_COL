Algoritmo super_Adivina
	
	//Ejercicio:  Realizar un programa que llamado super_Adivina
	//Pida un numero del 1 al 10;
	//Guardar ese numero en la variable: nUser
	//Crear la variable nMaquina y asignarle el valor numerico 6
	//utilizar la estructura si/entonces
	//Si nUser es igual al nMaquina
	//Mostrar "Adivinaste!!"
	//Si el nMaquina es mayor al nUser
	//Mostrar "Era más alto"
	//SiNo
	//Mostrar "Era más bajo"
	//De no adivinar ademas del mensaje "Era más alto" o "Era más bajo",
	//Mostrar "El número era: " , nMaquina
	
	Definir nUser Como Entero
	Escribir "Adivina el numero del 1 al 10"
	Leer nUser
	
	nMaquina = 6
	
	Si (nUser == nMaquina) Entonces
		Mostrar "Adivinaste"
	SiNo
		Si nUser < nMaquina Entonces
			Mostrar "Era más alto"
		SiNo
			Mostrar "Era más bajo"
		Fin Si
		Mostrar "El numero era: ", nMaquina
	Fin Si


FinAlgoritmo
