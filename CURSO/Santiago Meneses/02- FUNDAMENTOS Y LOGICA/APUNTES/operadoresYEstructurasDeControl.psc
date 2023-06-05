Proceso operadoresYEstructurasDeControl
	
	////////////////////////////////////////////////////////////
	/// TEMAS: DEL MODULO 07 FUNDAMENTOS Y LOGICA
	
	///Tipos de operadores:
		///Operadores Aritméticos o Algebraicos o Matemáticos.
		///Operadores de Comparación / Relacionales.
		///Operadores lógicos.
	
	///Estructuras de control:
		///IF/ELSE (SI/NO)
		///SWITCH
		///WHILE
		///Extra: Aleatorio

	////////////////////////////////////////////////////////////
	
	Escribir "Operadores Aritméticos";Escribir "";
	///Operadores Aritméticos o Algebraicos o Matemáticos.
	/// SUMA: Suma dos números juntos.
	Definir suma Como Entero;
	suma = 10 + 10;
	Escribir "Suma: 10 + 10";
	Escribir "El resultado de la suma es: ", suma;
	
	/// RESTA: Resta el número de la derecha del de la izquierda.
	Definir resta Como Entero;
	resta = 20 - 10;
	Escribir "Resta: 20 - 10";
	Escribir "El resultado de la resta es: ", resta;
	
	/// MULTIPLICACIÓN
	Definir multiplicacion Como Entero;
	multiplicacion = 10 * 10;
	Escribir "Multiplicacion: 10 * 10";
	Escribir "El resultado de la multiplicacion es: ", multiplicacion;
	
	/// DIVISIÓN
	Definir division Como Entero;
	division = 10 / 10;
	Escribir "Division: 10 / 10";
	Escribir "El resultado de la division es: ", division;
	
	/// MODULO
	Definir modulo Como Entero;
	modulo =  10 % 2;
	Escribir "Modulo: 10 % 2";
	Escribir "El resultado de la suma es: ", modulo;
	////////////////////////////////////////////////////////////
	
	
	Escribir "";Escribir "Operadores de Comparación";
	///Operadores de Comparación / Relacionales.
	Definir comparacion Como Logico;
	///mayor que (>), 
	comparacion = 10 > 12;
	Escribir Sin Saltar "Mayor que: ";
	Escribir "10 > 12 es = ", comparacion;
	
	///menor que (<),
	comparacion = 10 < 20;
	Escribir Sin Saltar "Menor que: ";
	Escribir " 10 < 12 es = ", comparacion;
	///mayor o igual (>=), 
	comparacion = 10 >= 12;
	Escribir Sin Saltar "Mayor o igual: ";
	Escribir "10 >= 12 es = ", comparacion;
	///menor o igual (<=), 
	comparacion = 10 <= 12;
	Escribir Sin Saltar "Menor o igual: ";
	Escribir "10 <= 12 es = ", comparacion;
	///igual que (==) 
	comparacion = 5 == 5;
	Escribir Sin Saltar "Igual que: ";
	Escribir "5 == 5 es = ", comparacion;
	///distinto de (<>, <>).
	comparacion = 12 <> 12;
	Escribir Sin Saltar "Diferente de: ";
	Escribir "12 <> 12 es = ", comparacion;
	////////////////////////////////////////////////////////////
	
	
	Escribir "";Escribir "Operadores lógicos";
	///Operadores lógicos.
	///Los operadores lógicos también se denominan operadores Booleanos.
	///Devuelven un resultado verdadero, falso o nulo.

	///&&(y): Si los dos son verdaderos devuelve verdadero.
	///||(o): Basta con que uno sea verdadero para que devuelva verdadero.
	///!(no): Negación
	////////////////////////////////////////////////////////////

	
	Escribir "";Escribir "ESTRUCTURA DE CONTROL";
	/// IF/ELSE: Un if en programación se utiliza para evaluar una expresión condicional: si se cumple la condición (es verdadera), ejecutará un bloque de código.
	
	Escribir "IF / ELSE = Sí 1 es igual a 1 escribe el bloque de verdadero";
	Escribir "¿1 es igual a 1?";
	Si (1 == 1) Entonces
		///Se ejecuta el bloque de Verdadero
		Escribir "En efecto 1 es igual a 1";
	SiNo
		/// Aca se añade el bloque de falso, en tal caso de que la condición inicial no se cumpla.
	FinSi
	
	///
	Definir numeroIngresado Como Entero;
	
	Escribir "Ingrese un número del 1 al 10";
	Leer numeroIngresado;
	
	Si (numeroIngresado <= 10) Entonces
		Escribir "Correcto";
	SiNo
		Escribir "Incorrecto";
	FinSi
	
	
	///SWITCH
	Definir opcion Como Entero;
	Definir nombre Como Cadena;
	Escribir "Elija una opción:";
	Escribir "1. Saludo";
	Escribir "2. Despedida";
	Escribir "3. Carita feliz";
	Leer opcion;
	
	Segun opcion Hacer
		1:
			Escribir "Ingresa tu nombre para saludarte";
			Leer nombre;
			Escribir "Hola ", nombre, " saludos";
		2:
			Escribir "Chau amigo/a";
		3:
			Escribir"-  -";
			Escribir".  .";
			Escribir"  °  ";
			Escribir"\__/";
		De Otro Modo:
			Escribir "Ingrese una opción valida";
	FinSegun
	
	
	
	///WHILE

	
	
	
	///ALEATORIO
	
	
	
	
FinProceso
