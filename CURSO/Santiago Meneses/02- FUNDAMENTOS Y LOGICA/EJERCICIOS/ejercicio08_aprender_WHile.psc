Algoritmo super_Adivina
	
	
	//Diagrama en la pagina 24
	
	//genero un número aleatorio lo guardo en la variable "nAzar"
	//creo la variable "intentos" y le paso como dato el numero 3
	//Escribo en pantalla: "adivina número del 1 al 10, tienes: " , intentos (aca hago referencia a la variable) , " intentos"
	//Pido un numero
	//el numero lo guardo en la variable nUser
	//si el número(nAzar) no es igual entrará al while si el numero (nAzar) es mayor : Mostrar "tu numero muy bajo" si el numero (nAzar) es menor : Mostrar "tu numero muy alto"
	//Restamos 1 intento
	//Mostrar "Te quedan... " , intentos (aca hago referencia a la variable) , " intentos!"
	//capturamos número elegido por user: Leer nUser antes de finalizar el while
	//Por fuera del while: Si.- el numero nAzar es igual al nUser Mostrar "Adivinaste!!, el numero era" , nAzar
	//SiNo.-"Perdiste!! se te acabaron los intentos! el numero era: " nAzar
	
	Definir numeroMaquina, numeroUsuario, intentos Como Entero;
	Definir bandera Como Logico;
	bandera = Verdadero;
	intentos = 3;
	
	Mientras (intentos >= 0 y bandera) Hacer
		numeroMaquina = Aleatorio(1, 10);
		Escribir "Adivinador 3000 mil";
		Escribir "Escribe un número entre 1 y 10"; 
		Leer numeroUsuario;
		
		Si (numeroUsuario > 0 y numeroUsuario < 11) Entonces
			Si (numeroMaquina == numeroUsuario) Entonces
				Escribir "Felicidades has acertado";
				bandera = Falso;
			SiNo
				Escribir "Lo sentimos, el número era: ", numeroMaquina;
				Escribir "Sigue intentando te quedan: ", intentos, " intento/s.";
				Si (intentos == 0) Entonces
					Escribir "Lo sentimos, has culminado los intentos";
				FinSi
			FinSi
		SiNo
			Escribir "Recuerda que el número debe de estar dentro del rango de 1 a 10"; 
		FinSi
		intentos = intentos - 1;
	FinMientras
	
	
FinAlgoritmo