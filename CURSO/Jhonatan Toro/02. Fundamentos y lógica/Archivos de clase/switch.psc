
Algoritmo switch
	
	//Switch --> permite ejecutar opcionalmente varias acciones posibles, dependiendo del valor almacenado en una variable.
	//Semáforo
	
	Escribir "Elija una opción para el Semaforo: Rojo, Amarillo, Verde"
	Leer opcionElegida
	
	Segun opcionElegida Hacer
		"Rojo":
			Mostrar "Semáforo en Rojo, NO podés avanzar"
		"Amarillo":
			Mostrar "Semáforo en Amarillo, avanzar con precaución"
		"Verde":
			Mostrar "Semáforo en Verde, podés avanzar"
		De Otro Modo:
			Mostrar "Tenés que elegir un color que tenga el semáforo (Rojo, Amarillo o Verde)"
	Fin Segun
	
FinAlgoritmo