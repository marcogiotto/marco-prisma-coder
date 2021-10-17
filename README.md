# Prisma shop

Prisma shop es una tienda online de ropa para hombre y mujeres.
![Prisma shop gif](https://github.com/marcogiotto/prisma-coder/blob/master/public/gif/prisma-shop.gif)

# Estructuración del proyecto

En este proyecto se agruparon dentro del src por un lado la carpeta componentes , la carpeta context, la carpeta ui , la carpeta services y la carpeta views.

## Carpeta Components
La carpeta components contiene todos los componentes que contienen lógica del proyecto. Dentro de esta se encuentran en primer nivel las carpetas contenedoras de los componentes segun su funcionalidad. ej: Cart/CartListContainer | Cart/CartList.
Algun componentes que necesitaron estilización extra , cuentan con su correspondiente archivo .css dentro de la misma carpeta donde esta el componente.

## Carpeta Context
Esta carpeta contiene el cartContext y MessageContext. 

En el cartContext se encuentra la lógica del carrito de compras (eliminar,obtenerTotal,vaciarCarrito,etc).

En el MessageContext se encuentra la lógica de los mensajes o alertas de la aplicación para informar al usuario si se realizó la acción con éxito o si ocurrió algun error.

## Carpeta UI
Esta carpeta contiene componenetes que carecen de toda lógica y son simplemente esteticos. En este caso solo encontraran un componenete Loader.

## Carpeta Service
Esta carpeta contiene gran parte de la lógica y funcionalidades de la integración de firebase, como traer productos de la base de datos y traer categorias. 


## Carpeta View
En esta carpeta encontraron cada una de la vistas/paginas del sitio (productos/home/carrito/checkout/categorias);


# Librerias para estilos utilizadas

En este proyecto implemente la libreria de estilos css  [bootstrap](https://getbootstrap.com/) para poder facilitar la estilización y el desarrollo mobile de la pagina. Tambien incluí [bootstrap Icons](https://icons.getbootstrap.com/) para poder implementar iconografía en la pagina de una forma mucho mas rapida y unificada.




# Como descargar y levantar el proyecto

## Descargar el proyecto
Para descargar el proyecto debes clonar el repositorio. 

Realizando el comando git clone https://github.com/marcogiotto/marco-prisma-coder.git

## Levantar el proyecto

### `npm install`
Ejecuta este comando para instalar todas las dependencias del proyecto.

### `npm start`

Levanta la aplicacion en entorno de desarrollo.\
En [http://localhost:3000](http://localhost:3000) para ver el poryecto en el explorador.

La pagina se va a recargar si realizas algun cambio y 
podras ver si hay algun error en las alertas de la consola.


