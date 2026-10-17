/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';


/* 2. Zona Main */
export default function App() {
  return (
    <View style={styles.container}>


    <Perfil nombre="Leonardo" materia="Movil" carrera="TIID" cuatrimestre="4to"/>

      
    <Perfil nombre="Carlos" materia="Movil" carrera="TIID" cuatrimestre="4to"/>


    <Perfil nombre="Aaron" materia="Movil" carrera="TIID" cuatrimestre="4to"/>



      <StatusBar style="auto" />
    </View>
  );
}

/* 3. Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
