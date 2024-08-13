# TODO

### Seguridad/Autenticacion

*Backend*
- [x] Hacer autenticacion por usuario/invitado en backend. Generar TOKEN (JWT)
- [x] Configurar autenticacion a traves de Google con 0AUTH.

*Frontend*
- [X] Autenticacion a traves del servicio de backend
- [X] Conectar con el store.


# Presidente

*Backend*
- [x] Generar codigo unico para recien ahi, hacer la conexion al socket y al chat grupal(/get)
- [ ] Con el mismo ID unico de sala, generar una sala de chat grupal
- [X] Codear y pensar la sala de chat     
    msg       => Nombre, idJugador, msg, fechaEnviado.  
    isTyping  => Nombre, isTyping
- [X] Hacer la conexion al websocket del juego y sala.

*Frontend*
- [X] Hacer conexion al juego y a la sala 
- [X] Cambiar rutas. /lobby --> Manda a generar el codigo unico de la partida
     /game/:id --> se conecta al juego y chat grupal (muestra el loading o game por condicional)


# TodoList

*Backend*
- [ ] por usuario generar una lista de tareas
     tarea => idTarea(number), nota(string), completada(boolean), fecha
- [ ] CRUD de tarea

*Frontend*
- [ ] Traer lista de tareas por usuario
- [ ] A través de (GET,POST,UPDATE,DELETE) marcar como listas las tareas.

# Usuario and authorities

*Backend*
- [ ] CRUD de usuario
- [ ] generar Administrador/usuario comun
- [ ] Modificar usuario -> poder agregar Foto
