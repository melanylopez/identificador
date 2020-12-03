function inicio(user, password) {
    switch (true) {
    case user == 'admi'  && password == 1234:
    console.log ('Bienvenidos a nuestro sitio')
    break;
    case user == "admin" && password == 1234:
    console.log ('contraseña incorrecta')
    break;
    ​
    case user != "admin" && password == 1234:
    console.log ('usuario incorrecto')
    break;
    case user != "admin" && password != 1234:
    break;
    case user != "admin" && password != 1234:
    break;
    default:
    console.log('debe ingresar los datos requeridos)
    }
    }
    Inicio('admin', 1234)