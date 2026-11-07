import { StyleSheet, View, Text, TextInput, Pressable, ImageBackground, FlatList, ActivityIndicator, Alert } from 'react-native';
import { useState } from 'react';

/* 2. Zona Main */
export default function LibrosScreen() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [libros, setLibros] = useState([]);
    const [cargando, setCargando] = useState(false);

    const agregarLibro = () => {
        if (titulo === '' || autor === '' || genero === '') {
            Alert.alert('Error', 'Todos los campos son obligatorios.');
            return;
        }

        setCargando(true);

        setTimeout(() => {
            const nuevoLibro = { id: Date.now().toString(), titulo: titulo, autor: autor, genero: genero };
            setLibros([...libros, nuevoLibro]);
            setTitulo('');
            setAutor('');
            setGenero('');
            setCargando(false);
            Alert.alert('Listo', 'Libro guardado correctamente.');
        }, 4000);
    };

    return (
        <ImageBackground source={require('../assets/fondo.jpg')} style={styles.fondo}>

            <Text style={styles.titulo}>Catálogo de Libros</Text>

            <TextInput style={styles.input} placeholder="Título del libro" value={titulo} onChangeText={setTitulo} />
            <TextInput style={styles.input} placeholder="Autor" value={autor} onChangeText={setAutor} />
            <TextInput style={styles.input} placeholder="Género" value={genero} onChangeText={setGenero} />

            <Pressable style={styles.boton} onPress={agregarLibro}>
                <Text style={styles.textoBoton}>Agregar Libro</Text>
            </Pressable>

            {cargando && <ActivityIndicator size="large" color="#CCD0CE" />}

            <Text style={styles.total}>Total de libros: {libros.length}</Text>

            <FlatList
                data={libros}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarjeta}>
                        <Text>{item.titulo}</Text>
                        <Text>Autor: {item.autor}</Text>
                        <Text>Género: {item.genero}</Text>
                    </View>
                )}
            />

        </ImageBackground>
    );
}

/* 3. Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
    },
    titulo: {
        fontSize: 22,
        color: '#CCD0CE',
        textAlign: 'center',
        marginBottom: 15,
    },
    input: {
        backgroundColor: '#CCD0CE',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    boton: {
        backgroundColor: '#253745',
        padding: 12,
        alignItems: 'center',
        borderRadius: 5,
    },
    textoBoton: {
        color: '#CCD0CE',
    },
    total: {
        color: '#9BA8AB',
        marginVertical: 10,
    },
    tarjeta: {
        backgroundColor: '#9BA8AB',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});
