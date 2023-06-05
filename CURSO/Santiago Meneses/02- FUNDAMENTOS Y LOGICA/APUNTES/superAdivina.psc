Proceso superAdivina
	
	Definir numeroSecreto, numeroUsuario Como Entero;

	numeroSecreto = Aleatorio(1, 10);
	
	Escribir "Adivinador 3000mil";
	Escribir "Escribe un número entre 1 y 10"; 
	Leer numeroUsuario;
	
	Si (numeroUsuario > 0 y numeroUsuario < 11) Entonces
		Si (numeroSecreto == numeroUsuario) Entonces
			Escribir "Felicidades has acertado"; 
		SiNo
			Escribir "Lo sentimos sigue intentando";
			Escribir "El número era: ", numeroSecreto;
		FinSi
	SiNo
		Escribir "Recuerda que el número debe de estar dentro del rango de 1 a 10"; 
	FinSi
	
FinProceso
