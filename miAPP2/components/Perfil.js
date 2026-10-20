import { Text, View, Button, StyleSheet} from 'react-native';
import { useState } from 'react';

export const Perfil=({nombre, carrera, materia, cuatrimestre, style})=>{
    const [ mostrar, setMostrar ]= useState(false);

    return(


        <View style={[estilos.tarjeta, style]}>
            <Text style={estilos.nombre}>{nombre}</Text>

            { mostrar &&
            <>
            <Text style={estilos.carrera}>{carrera}</Text>
            <Text style={estilos.otroTexto}>{materia}</Text>
            <Text style={estilos.otroTexto}>{cuatrimestre}</Text> 
            </>
            }

            <Button title="Ver perfil" onPress={() => setMostrar(!mostrar)}/>

        </View>

    )
}
const estilos= StyleSheet.create({
    nombre:{
        fontSize:24,
        fontWeight:800,
        textTransform:'uppercase',
        color:'#ffffff',
        
    },
    carrera:{
        fontSize:18,
        color:'#8a63ff',
        fontFamily:'Roboto',
    },
    otroTexto:{
        fontSize:12,
        fontFamily:'Courier',
        fontStyle:'italic',
        color:'#0b4800',
    },
    tarjeta:{

        borderWidth:1,
        borderRadius:10,
        padding:15,
        margin:5,
        backgroundColor:'#474646',

    },


});
