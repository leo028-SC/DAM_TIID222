import { StyleSheet, View, Text, Switch } from 'react-native';


export default function SwitchPregunta({ pregunta, valor, setValor }) {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.pregunta}>{pregunta}</Text>
            <Switch
                value={valor}
                onValueChange={(nuevoValor) => setValor(nuevoValor)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    pregunta: {
        fontSize: 16,
        color:'#ffffff'
    },
});
