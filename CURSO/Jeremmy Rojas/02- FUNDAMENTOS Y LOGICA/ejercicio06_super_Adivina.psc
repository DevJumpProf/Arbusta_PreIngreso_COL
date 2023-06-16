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
	
	Escribir "En este juego trataremos de adivinar un número."
	Escribir "Por favor digite un número del 1 al 10"
	Leer nUser
	
	nMaquina = 6
	
	Si nUser==nMaquina Entonces
		Escribir "¡Correcto! adivinaste el número"
	SiNo
		Si nUser>nMaquina Entonces
			Escribir "¡Incorrecto! el número era más bajo"
			Escribir "El número correcto era ", nMaquina
		SiNo
			Escribir "¡Incorrecto! el número era más alto"
			Escribir "El número correcto era ", nMaquina
		Fin Si
	Fin Si
	
FinAlgoritmo
