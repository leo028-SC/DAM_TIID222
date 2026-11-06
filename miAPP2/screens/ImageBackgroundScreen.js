/*1. zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Platform, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';

/*2. zona de main */
export default function App() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (showSplash) {
        return (
            <View style={styles.splashContainer}>
                <Text style={styles.splashTitle}>BIENVENIDOS</Text>
                <Text style={styles.splashSub}>Práctica No.9: Componentes Nativos</Text>
                <ActivityIndicator size="large" color="#fb8ae8" style={{ marginTop: 20 }} />
                <Text style={styles.splashLoading}>Cargando presentación...</Text>
                <StatusBar style="light" />
            </View>
        );
    }

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.titulo}>ImageBackgroung & SlapshScreen </Text>
                <Text style={styles.subtitulo}>Hola ¿Todo Bien? </Text>
                
            </View>

            <StatusBar style="light" />
        </ImageBackground>
    );
}

/*3. zona de estilos y posicionamiento*/
const styles = StyleSheet.create({

    splashContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4a1453',
        width: '100%',
        height: Platform.OS === 'web' ? '100vh' : '100%',
    },
    splashIcon: {
        fontSize: 80,
    },
    splashTitle: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
    },
    splashSub: {
        color: '#a7f3d0',
        fontSize: 18,
        marginTop: 5,
    },
    splashLoading: {
        color: '#d1fae5',
        fontSize: 12,
        marginTop: 20,
    },
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: Platform.OS === 'web' ? '100vh' : '100%',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 20,
        paddingHorizontal: 40,
        borderRadius: 15,
        alignItems: 'center',
    },
    titulo: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitulo: {
        color: '#b74eca',
        fontSize: 12,
        marginTop: 8,
        textAlign: 'center',
    }
});