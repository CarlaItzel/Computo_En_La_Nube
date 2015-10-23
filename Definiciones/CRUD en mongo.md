## DEFINICIONES ##


### CRUD EN MONGO ###

- **CREATE**: Todo lo que queramos trabajar en MongoDB se tiene que hacer solo y exclusivamente en formato JSON.

   - **FUNCIÓN INSERT**
   		  La sintaxis es la siguiente: _db.coleccion.insert( { ” documento ” } )_
	   1.	Si el campo “_id” esta duplicado se lanza una excepción.
	   2.	El tamaño máximo de un documento BSON es de 16 mb.
	   3.	El campo “_id” es usado como clave primaria.
	   4.	Ningún campo puede comenzar con $ y tampoco puede comenzar con un punto.
	   

   - **FUNCIÓN SAVE**
   	Es similar a la función INSERT en las nuevas versiones de MongoDB

