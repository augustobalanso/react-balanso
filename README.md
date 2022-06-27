# Wookies

Proyecto realizado con REACT

## Proyecto FINAL 
* Se agrega nuevo pagina para consultar todas las órdenes existentes en Firestore (Obviamente que no se realiza filtrado de consulta x cliente)
* Nuevo badge en icono de carrito del navbar accediendo al contexto.
* Alerta con ID de doc creado en Firestore a la hora de subir la órden
* Se limpia UX para que el usuario no llegue a errores ni dead-ends en los pasos de adición al carrito.
* Se arregla error al tratar de reintentar pedidos sin refrescar (totales mal calculados)


## 10mo Desafío - Item Collection desde Firebase
* Se cambia toda la estructura de toma de datos desde API propia, para incluir la toma desde modulo de firebase.

## 9no Desafio - Cart View
* Se agrega /Cart el cual reutiliza la misma tabla que aplica CartWidget
* Se implementa un <p> condicional que aparece solo si está vacío el carrito

## 8vo Desafio = Cart Context

* Se agrega carrito funcional tanto al navbar como a la ruta /cart empleando el mismo componente CartTable.
* Se emplean contextos y se añaden 4 funciones para interactuar con el carrito (add,delete,clear y console.log del carrito)
* Se quita metodo de compra de ItemList, solo se canalizan adiciones al carrito desde ItemDetail


## 7mo Desafio 

* Se integra cambio de estados a traves de prop to child en botón onAdd. Estos cambios se reflejan tanto en pantalla de ItemDetail como en ItemList. 
* Se cambian anchortags del navbar por link (el del brand precisamente) para respetar la premisa de no-refresh de react.


## PRE-ENTREGA PROYECTO FINAL

* Se crea menú en botón "Productos" para poder acceder a las distintas categorías
* Se modifican enrutamientos para cumplir con las rúbricas de evaluación.
* Los productos de la API tienen ahora un parámetro "category" que luego mediante un filter dentro de la llamada a la API, permite cerrar la búsqueda solo a los objetos que pertenezcan a dicha categoría.
* Incursionando con useNavigate se crea botón para volver a la página anterior, independientemente de si se ingresa al detalle de un item desde una búsqueda filtrada, como desde el ahora home que es el listado de todos los productos.

------------------------------------------------------------

## 6to Desafio 

* Se diseña en el home un ItemDetail de uno de los elementos de la API empleada en el desafio 5, se mantiene la misma estructura de ser el Container quien llame al objeto de la API y el Item quien despliega la data pasada por prop.
* Si bien no entra en estas rubricas se habilitan botones del navbar enrutados a sus respectivas páginas, en vez de deshabilitar el home del desafio 5, se lo pasó a la ruta /productos.
* Se crea blog el cual no es más que un feed RSS de una página de noticias/novedades de zapatillas (se hizo pura y exclusivamente para aprender a manipular el json/xml con el que responde el rss.)

------------------------------------------------------------

## 5to Desafio 

* Se agrega async fetch para traer stock de api montada en Firebase.
* Se pasa respuesta del fetch como prop al componente que mapea.
* Si bien la api no tarda al instante en traer los datos (maldito array no inicializado que hacia que el .map dé error), aún así se agregan 2 segundos extras antes de la carga de la api solo porque las rúbricas lo piden.
* La lógica preexistente de botones y condicionales en relación al stock del desafio 4 siguen funcionando (todo se deshabilita cuando se tiene que deshabilitar). 
* Se agrega Modal para desplegar descripción del item y fotos
* Se agrega Slideshow al modal para ver mejor el producto (no se para que me gasto si esto no es UX/UI)
* Dejo console.log para que se vea el response de la api

------------------------------------------------------------

## 4to Desafio

* Se agrega contador.
* El contador posee animacion BADGE el cual incrementa segun cantidad elegida
* Los botones de incremento/decremento se deshabilitan al llegar a ambos extremos (techo de stock o piso de stock en 1)
* Boton de compra se deshabilita si el prop de stock (proviene de App.js) entra con 0.
* Mensaje de cantidad de stock (cambia con condicional segun haya o no stock).
* El boton de compra imprime un console log de cuantos pares se agregaron (mas un ternario que define plural o singular en palabra 'par' TOTALMENTE AL PEDO)
