Proceso operadoresYEstructurasDeControl
	
	////////////////////////////////////////////////////////////
	/// TEMAS: DEL MODULO 07 FUNDAMENTOS Y LOGICA
	
	///Tipos de operadores:
		///Operadores Aritm�ticos o Algebraicos o Matem�ticos.
		///Operadores de Comparaci�n / Relacionales.
		///Operadores l�gicos.
	
	///Estructuras de control:
		///IF/ELSE (SI/NO)
		///SWITCH
		///WHILE
		///Extra: Aleatorio

	////////////////////////////////////////////////////////////
	
	Escribir "Operadores Aritm�ticos";Escribir "";
	///Operadores Aritm�ticos o Algebraicos o Matem�ticos.
	/// SUMA: Suma dos n�meros juntos.
	Definir suma Como Entero;
	suma = 10 + 10;
	Escribir "Suma: 10 + 10";
	Escribir "El resultado de la suma es: ", suma;
	
	/// RESTA: Resta el n�mero de la derecha del de la izquierda.
	Definir resta Como Entero;
	resta = 20 - 10;
	Escribir "Resta: 20 - 10";
	Escribir "El resultado de la resta es: ", resta;
	
	/// MULTIPLICACI�N
	Definir multiplicacion Como Entero;
	multiplicacion = 10 * 10;
	Escribir "Multiplicacion: 10 * 10";
	Escribir "El resultado de la multiplicacion es: ", multiplicacion;
	
	/// DIVISI�N
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
	
	
	Escribir "";Escribir "Operadores de Comparaci�n";
	///Operadores de Comparaci�n / Relacionales.
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
	
	
	Escribir "";Escribir "Operadores l�gicos";
	///Operadores l�gicos.
	///Los operadores l�gicos tambi�n se denominan operadores Booleanos.
	///Devuelven un resultado verdadero, falso o nulo.

	///&&(y): Si los dos son verdaderos devuelve verdadero.
	///||(o): Basta con que uno sea verdadero para que devuelva verdadero.
	///!(no): Negaci�n
	////////////////////////////////////////////////////////////

	
	Escribir "";Escribir "ESTRUCTURA DE CONTROL";
	/// IF/ELSE: Un if en programaci�n se utiliza para evaluar una expresi�n condicional: si se cumple la condici�n (es verdadera), ejecutar� un bloque de c�digo.
	
	Escribir "IF / ELSE = S� 1 es igual a 1 escribe el bloque de verdadero";
	Escribir "�1 es igual a 1?";
	Si (1 == 1) Entonces
		///Se ejecuta el bloque de Verdadero
		Escribir "En efecto 1 es igual a 1";
	SiNo
		/// Aca se a�ade el bloque de falso, en tal caso de que la condici�n inicial no se cumpla.
	FinSi
	
	///
	Definir numeroIngresado Como Entero;
	
	Escribir "Ingrese un n�mero del 1 al 10";
	Leer numeroIngresado;
	
	Si (numeroIngresado <= 10) Entonces
		Escribir "Correcto";
	SiNo
		Escribir "Incorrecto";
	FinSi
	
	
	///SWITCH
	Definir opcion Como Entero;
	Definir nombre Como Cadena;
	Escribir "Elija una opci�n:";
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
			Escribir"  �  ";
			Escribir"\__/";
		De Otro Modo:
			Escribir "Ingrese una opci�n valida";
	FinSegun
	
	
	
	///WHILE

	
	
	
	///ALEATORIO
	
	
	
	
FinProceso
