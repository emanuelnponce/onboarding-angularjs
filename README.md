# AngularJs - Onboarding

Proyecto base para realizar el Onboarding de Angularjs.
Se utiliza sass para las hojas de estilo y pug para el html (https://pugjs.org/api/getting-started.html).
Estrucura básica:
+ **index.js**: El archivo base del proyecto.
+ **index.pug**: Layout principal.
+ **routes.js**: Definición de todas las rutas del proyecto usando la librería ui-router (https://github.com/angular-ui/ui-router).
+ **components**: Aquí se encuentran los componentes del proyecto.
+ **styles.scss**: Definición de todos los estilo del proyecto.
+ **data**: Aquí se el archivo db.json con la información persistida que retornará la API.

## Ejecución del proyecto

Instalar dependencias con `npm i`.

Correr la API mockeada (json server) con `json-server --watch db.json`

Ejecutar el proyecto con `npm run start`.

## Implementación a realizar
El proyecto tiene como objetivo implementar una aplicación en AngularJs para abordar los conceptos y fundamentos básicos sobre ruteo, componentes anidados, manejo de formularios, directivas y utilización de servicios para realizar solicitudes HTTP. Por el contrario, no se encuentra dentro de las metas de este proyecto ahondar en implementaciones sofisticadas de UI/UX, por lo tanto se deberá desarrollar una interfaz mínima y necesaria para cumplir con los requisitos que se detallan a continuación.

Se deberá implementar una aplicación para listar libros y sus autores asociados (master-detail) así como un formulario para cargar nuevos recursos (tanto libros, como autores) en el sistema. 

La web deberá contar con 3 pantallas:
 1. **Listado de libros:** Se deberá implementar una tabla para listar los libros cargados en el sistema. Los items a mostrar deberán estar paginados y la tabla deberá contar con un campo de texto para poder filtrar por el ISBN del libro. A continuación se muestra el formato de la tabla:
		 
		 
| ID      | ISBN | TÍTULO | PRECIO (MONEDA)| AUTOR |
|---      |:---:|---|---|---|
| book.id | book.isbn | book.title | book.price.value + book.price.currency | book.author.name |  

Al hacer click sobre el autor de algún libro, se deberá activar una subsección en la pantalla (que se detalla a continuación) para mostrar los detalles del autor.

-   **Detalles del autor (Subsección de la pantalla 1):** Esta sección dinámica deberá mostrar los datos específicos de un autor determinado, según la fila que se haya seleccionado en la **pantalla 1** . El listado de la sección deberá mostrar:
	- Id: author.id
	- Nombre: author.name
	- Website: author.website
	- Nacionalidad: author.country
	- Biografía: author.biography
	
> **Consideraciones**
>
>  Se deberá mostrar un botón dentro de esta sección con el texto "Cerrar", en donde al hacer click sobre el mismo, deberá cerrar dicha sección para continuar visualizando únicamente el listado de libros.

 3. **Formularios de carga:** Esta pantalla deberá contener dos formularios, uno para cargar nuevos autores al sistema y otro para cargar nuevos libros.
	 - Inputs del Formulario de autor: 
	   - Nombre: campo de texto *(requerido)* 
	   - Website: campo de texto *(requerido, deberá ser una url válida con el protocolo http o https)*
	   - Nacionalidad: campo de texto *(requerido)*
	   - Biografía: text area *(no requerido)*
	   
	 - Inputs del Formulario del libro: 
	   - ISBN: campo numérico *(requerido, deberá contar exactamente con 13 dígitos)* 
	   - Título: campo de texto *(requerido)*
	   - Precio: campo numérico *(requerido)*
	   - Moneda: select *(requerido, valores: "EUR", "USD")*
	   - Autor: select *(requerido, deberá listar los autores presentes en el sistema)*

> **Consideraciones**
> 
> Al insertar un nuevo autor en el sistema, el select asociado al autor del formulario de carga de un libro deberá actualizarse sin necesidad de refrescar la pantalla.
	  
Además de estas 3 vistas, se deberá implementar un menú para poder redirigir a la **pantalla 1** y a la **pantalla 3**.

# API (Json Server)
> GET /books?_limit:XXX&_page:YYY&name&ISBN=ZZZ

	{
		id: string,
		isbn: number,
		title: string,
		author: {
			id: string,
			name: string
		},
		price: {
			currency: string,
			value: number
		}
	} []

> GET /authors/:id
  

	{
		 id: string,
		 name: string,
		 country: string,
		 website: string,
		 biography?: string
	} []

Para más detalles de utilización de la librería: https://www.npmjs.com/package/json-server
