# Pedidos Asincrónicos a backend propio, uso de Javascript Vanilla.

`Micro desafío - Paso 1:`


Aprovecharemos la base de datos ​movies_db​ ​(no olvidemos activar el servicio 
de MySQL en nuestro equipo). De esta manera, todo funcionará correctamente. 
Una vez realizados todos los pasos anteriores, debemos hacer lo siguiente en el proyecto 
front-end entregado:  
●En ​home.html​: listar todas las películas que nos trae el endpoint de listado de 
películas: router.get('/', moviesAPIController.list); 
●En ​formulario.html​: cargar los datos de una película en particular, para luego 
poder modificarla y/o eliminarla utilizando los endpoints: 
○Detalle de una película: router.get('/:id', moviesAPIController.detail); 
○Modificar una película: router.put('/update/:id', moviesAPIController.update); 
●Utilizar el mismo formulario anterior para poder crear una película por medio del 
endpoint: router.post('/create', moviesAPIController.creat​e​); 

`Micro desafío - Paso 2:`

Vamos con un desafío más complejo en nuestro ​home.html​. En cada película veremos que 
tenemos una estrellita. Esta permitirá ​guardar las películas favoritas mediante un clic.  
● Tendremos que capturar el ​evento​ click sobre ​cada ​estrellita (ojo que puede haber 
muchas estrellitas).  
● Al hacer clic en la estrellita debe almacenar en el ​storage​ el id de la película 
seleccionada.

- Nótese que puede haber muchas películas favoritas. Dado esto, ¿qué tipo de dato 
debemos almacenar en storage? Luego tendremos una página llamada 
favoritos.html​, donde debemos​: 
○Listar las películas que han sido marcadas como favoritas por el usuario.  
○Si aún no tuviese ninguna película, esta página debe indicar que aún no tiene 
nada. 
○Agregar en el encabezado de home.html un botón a “Mis películas favoritas”, 
Este botón solo debe aparecer si el usuario ya tiene películas favoritas.    

 
  
