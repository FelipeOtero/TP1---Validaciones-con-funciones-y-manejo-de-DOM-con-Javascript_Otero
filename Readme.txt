Explicación del Proyecto

Diseño de la Interfaz del Formulario

Para el diseño de la interfaz, se buscó que fuera sencilla, clara y fácil de usar. Se usó HTML para estructurar los campos de entrada y CSS para darle estilo al formulario. Se aplicó un diseño centrado en la pantalla con un fondo en degradado y un contenedor con bordes redondeados y sombras para destacar el formulario. Además, se agregó un efecto de "hover" para que el formulario se vea más interactivo.

Para mejorar la experiencia del usuario, también se implementó un "modo oscuro", que cambia los colores del formulario y el fondo cuando se presiona el botón correspondiente.

Validaciones Implementadas

Se agregaron validaciones en JavaScript para evitar que el usuario ingrese datos incorrectos o incompletos. Las validaciones funcionan de la siguiente manera:

Nombre Completo: Se verifica que tenga al menos 3 caracteres.

Email: Se valida con una expresión regular para asegurarse de que tenga un formato correcto (ejemplo: algo@gmail.com).

Contraseña: Debe tener al menos 8 caracteres e incluir una letra y un número.

Confirmación de Contraseña: Se chequea que coincida con la primera contraseña ingresada.

Si alguna validación falla, se muestra un mensaje de error en rojo al lado del campo correspondiente. Si todos los datos están bien, el formulario se guarda en "localStorage" y se muestra un mensaje en verde avisando que el registro fue exitoso.

Desafíos y Soluciones

Uno de los principales problemas fue hacer que los errores se mostraran de manera ordenada y clara sin afectar el diseño del formulario. Para resolverlo, se creó una función que agrega los mensajes de error justo debajo del campo con problemas y otra función que los borra cuando el usuario corrige la información.

Otro desafío fue implementar el "modo oscuro" sin afectar el resto del diseño. La solución fue usar la clase modo-oscuro, que se activa o desactiva al hacer clic en el botón, cambiando los colores de fondo y texto en consecuencia.

Posibles Mejoras

Si tuviéramos más tiempo, agregaríamos:

Mensajes más detallados en las validaciones, explicando por qué un dato es incorrecto.

Animaciones más fluidas para los errores y el "modo oscuro".

Uso de una base de datos real en vez de guardar los datos en localStorage, para que la información no se pierda al cerrar el navegador.

Un indicador de fortaleza de contraseña para que el usuario sepa si su clave es segura.

En general, el formulario funciona bien y cumple con su objetivo, pero siempre hay espacio para mejoras y optimizaciones.