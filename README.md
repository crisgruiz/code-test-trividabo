# Trividabo

Trividabo Number es una aplicación web en la que el usuario debe responder a 10 preguntas relacionadas con números aleatorios.

## ¿Cómo funciona?

El funcionamiento es el siguiente:

· Se deben responder a 10 preguntas y cada pregunta será sobre un número, escogido al azar.
· En cada pregunta se presentarán las opciones posibles, con una única respuesta correcta. El usuario tendrá un solo intento para responder a las preguntas.
· El usuario podrá elegir una de las respuesta y darle al botón **_Confirm_** para pasar a la siguiente o bien pulsar en **_Skip_** para pasar a la siguiente pregunta sin responder a la anterior. En este caso, se dará la pregunta como fallada.
· Durante el juego, el usuario tiene a su disposición el botón **_New game_** para empezar una partida nueva.
· El usuario podrá ver las preguntas que ya ha respondido según va contestando.
· Al terminar el juego el usuario podrá ver una página resumen con los resultados obtenidos y el botón **_Play Again_** para volver a jugar.

Las preguntas se generan a través de la API http://numbersapi.com/.

## Acceder a la aplicación web

Por tanto, para poder abrir la aplicación en el navegador, es necesario clonar el repositorio del proyecto.

Después de clonarlo necesitas ejecutar:

```
npm install
```

Una ver terminada la instalación, en el directorio del proyecto, ejecuta:

```
npm start
```

Abre http://localhost:3000 para verla en el navegador.

## Tecnologías

- HTML5
- Maquetación usando SASS
- React como framework JS (Create React App)
- Testing con Jest
- Github (control de versiones)

## Objetivos del proyecto

[x] Estructurar correctamente el estado de la aplicación y las transiciones de la misma.
[x] Diferenciar claramente las responsabilidades para cada componente.
[x] Control de los diferentes casos de error que se puedan plantear.
[] Testing: Todos las capas deberían tener al menos un test (unitario, integracion).

## Extras

[] Añadir una barra de progreso para el tiempo restante de cada pregunta que, segun va avanzando, cambie de color.
[x] Implementar un diseño responsive.
[x] Persistir el estado del juego, de modo que al recargar la página todo continue donde se quedó.
[] Utilizar Redux para gestionar el estado de la aplicación.
[x] Se valorará el uso de hooks
[] Se valorará el uso de styled-components

## Trabajo pendiente

- Añadir un contador que limite a 30 segundos el tiempo disponible para responder, con su correspondiente barra de progreso.
- Utilizar Redux para gestionar el estado de la aplicación.
- Aplicar style-components para aportar los estilos a la aplicación web.
- Diferenciar el resultado dependiendo de si el usuario ha contestado erroneamente a la pregunta o si la ha omitido.
- Realizar un mayor número de test, para que todas las capas cuenten con al menos un test.
