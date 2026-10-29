import { StyleSheet, View, Text, Switch } from 'react-native';

export default function SwitchEjemplo({ obscuro, setObscuro }) {

    return (
        <View style={styles.contenedor}>
            <Text style={[styles.titulo, { color: obscuro ? '#ffffff' : '#000000' }]}>
                Modo Obscuro
            </Text>
            <Switch
                value={obscuro}
                onValueChange={(valor) => setObscuro(valor)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        gap: 10,
    },
    titulo: {
        fontSize: 18,
    },
});