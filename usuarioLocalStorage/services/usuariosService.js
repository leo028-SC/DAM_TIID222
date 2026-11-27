import { guardarDatos, obtenerDatos } from "../storage/localStorage";

const CLAVE = "usuarios";

export const validarUsuario = (usuario, usuarios = []) => {
    if (usuario.nombre.trim() ==="") {
        return "El nombre es obligatorio"
    }

    const edad = Number(usuario.edad);
    if (usuario.edad === "" || isNaN(edad) || edad <= 0){
        return "La edad no es valida";
    }

    for (let i = 0; i < usuarios.length; i++){
        if (usuarios[i].nombre === usuario.nombre && usuarios[i].id !== usuario.id){
            return "Ya existe un usuario con este correo";

        }
    }
    return null;
};

export const obtenerUsuarios = async (datos) => {
    const usuarios = await obtenerDatos(CLAVE);
    if (usuarios === null){
        return [];
    }
    return usuarios;
};

export const obtenerUsuariosId = async (id) =>{
    const usuarios = await obtenerUsuarios();
    
    for (let i = 0; i < usuarios.length; i++){
        if (usuarios[i].id === id){
            return usuarios[i];
        }
    }
    return null;
}

export const agregarUsuario = async (datos) =>{
    const usuarios = await obtenerUsuarios();

    const error = validarUsuario(datos, usuarios);
    if (error != null){
        throw new Error(error);
    }

    datos.id = Date.now().toString();
    usuarios.push(datos);
    await guardarDatos(CLAVE, usuarios);
};

export const actualizarUsuario = async (datos) =>{
    const usuarios = await obtenerUsuarios();

    const error = validarUsuario(datos, usuarios);
    if (error != null){
        throw new Error(error);
    }

    for (let i = 0; i < usuarios.length; i++){
        if (usuarios[i].id === datos.id){
            usuarios[i] = datos;
        }
    }
    await guardarDatos(CLAVE, usuarios);
};

export const eliminarUsuario = async (id) => {
    const usuarios = await obtenerUsuarios();
    const nuevaLista = [];

    for (let i = 0; i < usuarios.length; i++){
        if (usuarios[i].id !== id){
            nuevaLista.push(usuarios[i]);
        }
    }
    await guardarDatos(CLAVE, nuevaLista)
}
