Proyecto base para realizar el onboarding de Angularjs.
Se utiliza sass para las hojas de estilo y pug para el html (https://pugjs.org/api/getting-started.html).
Estrucura básica:
+ **index.js**: El archivo base del proyecto.
+ **index.pug**: Layout principal.
+ **routes.js**: Definición de todas las rutas del proyecto usando la librería ui-router (https://github.com/angular-ui/ui-router).
+ **templates**: Aquí se encuentran todos los templates de cada vista.
+ **styles.scss**: Definición de todos los estilo del proyecto.
+ Cada vista estará definida por un componente, en este caso el único componente del proyecto es view1.js.

Instalar dependencias con `npm i`.

Correr la API mockeada (json server) con `json-server --watch db.json`

Ejecutar el proyecto con `npm run start`.

## Implementación a realizar
El proyecto tiene como objetivo implementar una aplicación en AngularJs para abordar los conceptos y fundamentos básicos sobre ruteo, componentes anidados, manejo de formularios, directivas y utilización de servicios para realizar solicitudes HTTP. Por el contrario, no se encuentra dentro de las metas de este proyecto ahondar en implementaciones sofisticadas de UI/UX, por lo tanto se deberá desarrollar una interfaz mínima y necesaria para cumplir con los requisitos que se detallan a continuación.

Se deberá implementar una aplicación para listar libros y sus autores asociados (master-detail) así como un formulario para cargar nuevos recursos (tanto libros, como autores) en el sistema. 

La web deberá contar con 3 pantallas:
 1. **Listado de libros:** Se deberá implementar una tabla para listar los libros cargados en el sistema. Los items a mostrar deberán estar paginados y la tabla deberá contar con un campo de texto para poder filtrar por el nombre del libro. A continuación se muestra el formato de la tabla:
		 
		 
| ID | ISBN | TÍTULO | PRECIO (MONEDA)| AUTOR
|--|--|--|--|--|--|--|
| book.id | book.isbn | book.title | book.price.value + book.price.currency | book.author.name |  

Al hacer click sobre el autor de algún libro, deberá redirigir a la **pantalla 2**.
	 
 2. **Detalles del autor:** Esta pantalla deberá mostrar los datos específicos de un autor determinado, según la fila que se haya seleccionado en la **pantalla 1** . El listado deberá mostrar:
	- 	Id: author.id
	-  Nombre: author.name
	- Website: author.website
	- Nacionalidad: author.country

 3. **Formulario de carga:**


# API (Json Server)
> GET /books?size:10&page:0

> GET /authors/:id
