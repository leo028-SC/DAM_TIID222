import { useState, useEffect } from 'react';
import InicioScreen from './screens/InicioScreen';
import LibrosScreen from './screens/LibrosScreen';

export default function App() {
    const [mostrarSplash, setMostrarSplash] = useState(true);

    useEffect(() => {
        const temporizador = setTimeout(() => {
            setMostrarSplash(false);
        }, 2000);

        return () => clearTimeout(temporizador);
    }, []);

    return mostrarSplash ? <InicioScreen /> : <LibrosScreen />;
}