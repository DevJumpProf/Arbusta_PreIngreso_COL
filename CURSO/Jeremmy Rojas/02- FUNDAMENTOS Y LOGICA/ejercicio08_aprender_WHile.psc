Algoritmo aprender_while
	
	//Diagrama en la pagina 24
	
//genero un n�mero aleatorio lo guardo en la variable "nAzar"
//creo la variable "intentos" y le paso como dato el numero 3
//Escribo en pantalla: "adivina n�mero del 1 al 10, tienes: " , intentos (aca hago referencia a la variable) , " intentos"
	//Pido un numero
	//el numero lo guardo en la variable nUser
	//si el n�mero(nAzar) no es igual entrar� al while si el numero (nAzar) es mayor : Mostrar "tu numero muy bajo" si el numero (nAzar) es menor : Mostrar "tu numero muy alto"
	//Restamos 1 intento
	//Mostrar "Te quedan... " , intentos (aca hago referencia a la variable) , " intentos!"
	//capturamos n�mero elegido por user: Leer nUser antes de finalizar el while
	//Por fuera del while: Si.- el numero nAzar es igual al nUser Mostrar "Adivinaste!!, el numero era" , nAzar
	//SiNo.-"Perdiste!! se te acabaron los intentos! el numero era: " nAzar

	nAzar = Aleatorio(1,10)
	intentos = 3
	
	Escribir "Adivina el n�mero del 1 al 10, tienes ", intentos, " intentos"
	
	Mientras intentos>0 Hacer
		Leer nUser
		Si nUser==nAzar Entonces
			Escribir "�Adivinaste!"
			intentos = 0
		SiNo
			Si nUser<nAzar Entonces
				Escribir "Tu n�mero es m�s bajo"
				intentos = intentos-1
				Escribir "Te quedan ", intentos, " intentos"
			SiNo
				Escribir "Tu n�mero es m�s alto"
				intentos = intentos-1
				Escribir "Te quedan ", intentos, " intentos"
			Fin Si
		Fin Si
	Fin Mientras
	
	Escribir "El n�mero correcto era ", nAzar
	
FinAlgoritmo
