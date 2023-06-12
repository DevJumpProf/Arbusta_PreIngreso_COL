Algoritmo ejercicio7_switch
	
	//Ejercicio: Codigo: Crear un programa que pida un numero y le recomiende a la persona un libro-pelicula o juego según la opción indicada
	
	Definir NumUsuario Como Entero;
	
	Escribir "Bienvenido al recomendador"; 
	Escribir "Tengo varias opciones, ¿cual prefieres?..."
	Escribir "1. Libro";
	Escribir "2. Película";
	Escribir "3. Juego";
	Leer NumUsuario
	
	Segun NumUsuario Hacer
		1: 
			Escribir "Lectura recomendada: "
			Escribir "El principe, (libro escrito por Maquiavelo) "
			Escribir "fue un gusto ayudarte, te espero para una nueva recomendacion ;)"
		2: 
			Escribir "Película recomendada: "
			Escribir " Lobo de Wall street (un poco sobre los mercados del mundo)"
			Escribir "fue un gusto ayudarte, te espero para una nueva recomendacion ;)"
		3:
			Escribir "Juego recomendado: "
			Escribir " Grand the Auto (puede sacarte de la rutina diaria) "
			Escribir "fue un gusto ayudarte, te espero para una nueva recomendacion ;)"
		De Otro Modo:
			Escribir "ingrese una opcion valida, 1.2.3"
	FinSegun
	
FinAlgoritmo
