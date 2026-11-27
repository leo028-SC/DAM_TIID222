export const guardarDatos = async (clave, valor) => {
    window.localStorage.setItem(clave, JSON.stringify(valor));
};

export const obtenerDatos = async (clave) => {
    const dato = window.localStorage.getItem(clave);
    return dato !== null ? JSON.parse(dato) : null;

};

export const eliminarDato = async (clave) => {
    window.localStorage.removeItem(clave);
};

