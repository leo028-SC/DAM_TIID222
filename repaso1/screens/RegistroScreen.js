/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Pressable, ScrollView, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import SwitchPregunta from '../components/SwitchPregunta';

const mostrarAlerta = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
        window.alert(`${titulo}\n\n${mensaje}`);
    } else {
        Alert.alert(titulo, mensaje);
    }
};

/* 2. Zona Main */
export default function RegistroScreen() {
    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');
    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deportes, setDeportes] = useState(false);

    const enviarRegistro = () => {

        if (nombre.trim() === '' || carrera.trim() === '' || semestre.trim() === '') {
            mostrarAlerta('Campos incompletos', 'Debes llenar todos los campos.');
            return;
        }

    
        if (isNaN(semestre) || semestre.trim() === '') {
            mostrarAlerta('Error', 'El semestre debe ser un número.');
            return;
        }

        const respuesta = (valor) => (valor ? 'Sí' : 'No');

        mostrarAlerta(
            'Registro enviado',
            `Nombre: ${nombre}\n` +
            `Carrera: ${carrera}\n` +
            `Semestre: ${semestre}\n\n` +
            `Taller: ${respuesta(taller)}\n` +
            `Constancia: ${respuesta(constancia)}\n` +
            `Deportes: ${respuesta(deportes)}`
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollConten}>

                <Text style={styles.titulo}>Registro de Evento Universitario</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre completo"
                    value={nombre}
                    onChangeText={setNombre}
                    placeholderTextColor={'#ffffff'}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Carrera"
                    value={carrera}
                    onChangeText={setCarrera}
                    placeholderTextColor={'#ffffff'}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Semestre"
                    value={semestre}
                    onChangeText={setSemestre}
                    keyboardType="numeric"
                    placeholderTextColor={'#ffffff'}
                />

                <Text style={styles.subtitulo}>Opciones</Text>

                <SwitchPregunta pregunta="¿Asistirá al taller?" valor={taller} setValor={setTaller} />
                <SwitchPregunta pregunta="¿Requiere constancia?" valor={constancia} setValor={setConstancia} />
                <SwitchPregunta pregunta="¿Participará en deportes?" valor={deportes} setValor={setDeportes} />

                <Pressable style={styles.boton} onPress={enviarRegistro}>
                    <Text style={styles.textoBoton}>Enviar Registro</Text>
                </Pressable>

                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
}

/* 3. Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0B2B26',
    },
    scrollConten: {
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#ffffff'
    },
    input: {
        borderWidth: 1,
        borderColor: '#235347',
        borderRadius: 10,
        padding: 14,
        marginBottom: 14,
        fontSize: 16,
        color:'#ffffff'
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 6,
        color: '#ffffff'
    },
    boton: {
        backgroundColor: '#8EB69B',
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
        marginTop: 24,
    },
    textoBoton: {
        color: '#DAF1DE',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
