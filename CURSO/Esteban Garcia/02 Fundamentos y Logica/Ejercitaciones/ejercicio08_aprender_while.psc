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
	Escribir "Ingresa un n�mero"
	Leer nUser
	Mientras nUser <> nAzar y intentos > 1 Hacer
		Si nAzar > nUser Entonces
			Mostrar "Tu numero es muy bajo"
		SiNo
			Mostrar "Tu numero es muy alto"
		Fin Si
		intentos = intentos - 1
		Mostrar "Tienes ", intentos, " intentos m�s"
		Leer nUser
	Fin Mientras
	
	Si nAzar = nUser Entonces
		Mostrar "Adivinaste, el numero era ", nAzar
	SiNo
		Mostrar "Perdiste, no tienes m�s intentos, el n�mero era ", nAzar
	Fin Si
	
	
FinAlgoritmo
