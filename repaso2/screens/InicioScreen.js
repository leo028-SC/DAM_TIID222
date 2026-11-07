/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';

/* 2. Zona Main */
export default function InicioScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/libros.png')}
                style={styles.logo}
            />
            <Text style={styles.nombre}>repaso2</Text>
            <StatusBar style="auto" />
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
        resizeMode: 'contain',
    },
    nombre: {
        fontSize: 18,
        marginTop: 20,
    },
});

