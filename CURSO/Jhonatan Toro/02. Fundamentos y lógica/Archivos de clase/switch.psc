
Algoritmo switch
	
	//Switch --> permite ejecutar opcionalmente varias acciones posibles, dependiendo del valor almacenado en una variable.
	//Sem�foro
	
	Escribir "Elija una opci�n para el Semaforo: Rojo, Amarillo, Verde"
	Leer opcionElegida
	
	Segun opcionElegida Hacer
		"Rojo":
			Mostrar "Sem�foro en Rojo, NO pod�s avanzar"
		"Amarillo":
			Mostrar "Sem�foro en Amarillo, avanzar con precauci�n"
		"Verde":
			Mostrar "Sem�foro en Verde, pod�s avanzar"
		De Otro Modo:
			Mostrar "Ten�s que elegir un color que tenga el sem�foro (Rojo, Amarillo o Verde)"
	Fin Segun
	
FinAlgoritmo