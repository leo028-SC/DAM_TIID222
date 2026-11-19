import {useEffect, useState} from 'react';
import InicioScreen from './screens/InicioScreen';
import LeoScreen from './screens/LeoScreen';

export default function App() {
    const [cargandoInicio, setcargandoInicio] = useState(true);

    useEffect (() => {
        setTimeout(() => {
          setcargandoInicio(false);
      }, 2000);
    }, [])

    return cargandoInicio ? <InicioScreen/> : <LeoScreen/>;
}

