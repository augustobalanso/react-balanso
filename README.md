# Wookies

Proyecto realizado con REACT

## 4to Desafio

* Se agrega contador.
* El contador posee animacion BADGE el cual incrementa segun cantidad elegida
* Los botones de incremento/decremento se deshabilitan al llegar a ambos extremos (techo de stock o piso de stock en 1)
* Boton de compra se deshabilita si el prop de stock (proviene de App.js) entra con 0.
* Mensaje de cantidad de stock (cambia con condicional segun haya o no stock).
* El boton de compra imprime un console log de cuantos pares se agregaron (mas un ternario que define plural o singular en palabra 'par' TOTALMENTE AL PEDO)

## 5to Desafio 

* Se agrega async fetch para traer stock de api montada en Firebase.
* Se pasa respuesta del fetch como prop al componente que mapea.
* Si bien la api no tarda al instante en traer los datos (maldito array no inicializado que hacia que el .map dé error), aún así se agregan 2 segundos extras antes de la carga de la api solo porque las rúbricas lo piden.
* La lógica preexistente de botones y condicionales en relación al stock del desafio 4 siguen funcionando (todo se deshabilita cuando se tiene que deshabilitar). 
* Se agrega Modal para desplegar descripción del item y fotos
* Se agrega Slideshow al modal para ver mejor el producto (no se para que me gasto si esto no es UX/UI)
* Dejo console.log para que se vea el response de la api