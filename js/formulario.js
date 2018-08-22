console.log("Funciona!! formulario.js, usado para crear cuentas y login)");

eventListeners();

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', validarRegistro);
}

function validarRegistro(e) {
    //e.preventDefault, previene de los saltos al envío de los formularios
    e.preventDefault();
    console.log("Función validarRegistro");
    var usuario = document.querySelector('#usuario').value,
        password = document.querySelector('#password').value,
        tipo = document.querySelector('#tipo').value;

    console.log(`${usuario} , ${password}`);

    if (usuario === '' || password === '') {
        //La validación falló
        swal({
            type: 'error',
            title: 'Error!!!!!.',
            text: 'Usuario y contraseña son obligatorios'
        })
    } else {
        swal({
            type: 'success',
            title: 'Correcto',
            text: 'Escribiste ambos campos'
        })

        //Ambos campos son correctos, mandar a ejecutar Ajax 
        //DATOS QUE SE ENVIARAN AL SERVIDOR   
        var datos = new FormData(); // puede ser usado en cualquier parte, le da llave y valor!!!
        //llave     valor
        datos.append('usuario', usuario);
        datos.append('password', password);
        datos.append('accion', tipo);
        //SE ha creado el Form Data correctamente
        console.log(datos);
        console.log(datos.get('usuario'));


        //CREAR LLAMADO A AJAX  
        var xhr = new XMLHttpRequest();

        //Abrir la conexión
        xhr.open('POST', 'inc/modelos/modelo-admin.php', true);

        //xhr onload retorno de datos

        xhr.onload = function() {
                if (this.status === 200) {
                    console.log(xhr.responseText);
                    console.log(JSON.parse(xhr.responseText));
                }
            }
            //ENVIAR LA PETICION, SE MANDA EL FORM DATA
        xhr.send(datos);
    }

}