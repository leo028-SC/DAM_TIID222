import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Text, Image} from 'react-native';


/*Zona main*/

export default function InicioScreen() {
    return (
        <View style = {styles.container} >
            <Image source={require ('../assets/sombra.png')} 
            style={styles.logo} />

            <Text>Leo PR</Text>
            <StatusBar style='auto'/>
        </View>
    );
}

/* 3. Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
});