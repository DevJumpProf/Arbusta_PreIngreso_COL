
Algoritmo aprender_while
	
	Definir nAzar, nUser, intentos Como Entero
	//genero un n�mero aleatorio y lo guardo en la variable "nAzar"
	nAzar = Aleatorio(1,10)
	intentos = 3
	Escribir "Adivina n�mero del 1 al 10, tienes ", intentos, " intentos."
	Escribir "Ingresa n�mero: "
	Leer nUser
	//si el n�mero(nAzar) no es igual entrar� al while si el numero (nAzar) es mayor : Mostrar "tu numero muy bajo" si el numero (nAzar) es menor : Mostrar "tu numero muy alto"
	Mientras  (nAzar <> nUser) && (intentos <> 1) Hacer
		Si (nAzar > nUser)
			Escribir "Muy bajo"
		SiNo
			Escribir "Muy alto"
		FinSi
		//Restamos 1 intento
		intentos = intentos - 1
		Escribir "Te quedan ", intentos, " intentos:"
		//capturamos n�mero elegido por user: Leer nUser antes de finalizar el while
		Leer nUser
	FinMientras
	Si (nAzar == nUser) Entonces
		Escribir "Adivinaste!!, el n�mero era: ", nAzar
	SiNo
		Escribir "Perdiste!!, se te acabaron los intentos"
	FinSi
	
FinAlgoritmo
