function validation(userData){

    const errors = {}

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)){
        errors.email = 'El nombre de usuario tiene que ser un email'
    }

    if(!userData.email){
        errors.email = 'El nombre de usuario no puede estar vacío'
    }

    if(userData.email.length > 35){
        errors.email = 'El nombre de usuario no puede tener más de 35 carácteres'
    }

    if(!/\d/.test(userData.password)){
        errors.password = 'La contraseña debe tener 1 numero al menos'
    }

    if(!userData.password.length > 6 || userData.password.length < 10)
        errors.password = 'La contraseña debe tener una longitud entre 6 y 10 caracteres'


    return errors
    }

export default validation ;