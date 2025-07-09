/**
 * Esta pantalla se basa en una pantalla de información sobre lo que son las ASADAS.
 */

import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';

/**
 * Aqui se crean textos usando las clases de textos para escribir información sobre las ASADAS.
 */
export default function AsadaInformation() {
    const router = useRouter();

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.announcesBox}>
                    <Text style={styles.announcesTitle}>Que es una Asada</Text>

                    <View style={styles.whiteBox}>
                        <Text style={styles.announcesText}>
                            Las ASADAS o Asociaciones Administradoras de Sistemas de Acueductos y Alcantarillados, son parte de un papel muy importante en Costa Rica, más especificamente en el
                            manejo o gestión del agua. Estas son organizaciones mayormente comunitarias que se encargan de administrar, mantener y operar todos los sistemas que envuelven el
                            abastecimiento de agua potable y el saneamiento en diversas partes del país. La creación de estás asociaciones tienen raíces profundas en la historia de Costa Rica,
                            su evolución ha resultado en un modelo de gestión exitoso y sostenible.
                        </Text>
                        <Text style={styles.announcesText}>
                            Estás mismas tienen su origen en 1970, surgierón como una respuesta de la necesidad de las personas de tener un acceso equitativo y seguro al agua potable en sus comunidades,
                            la formación de esta se dio gracias a la ley de ASADAS, en donde esta le otorgaba a las comunidades la capacidad de poder organizarse y gestionar sus propios sistemas de acueductos y alcantarillados.
                            A traves de los años, este mismo modelo se ha consolidado, llegando a abarcar grandes partes de Costa Rica.
                        </Text>
                        <Text style={styles.announcesText}>
                            Estás asociaciones operan mediante una estructura organizativa claramente definida, esto permite una buena gestión, tanto eficiente como
                            participativa de los sistemas de agua y saneamiento.
                        </Text>
                        <Text style={styles.announcesText}>
                            Estás asociaciones se componen de una junta directiva que es elegida por mienbros de la misma comunidad. Se conforma por presidentes, vicepresidentres, secretarios,
                            tesoreros y algunos que otros cargos que varían según la ASADA. La elección de los representantes se realiza de manera democrática y participativa durante
                            las asambleas generales.
                        </Text>
                        <Text style={styles.announcesText}>

                            Un dato importante es que las ASADAS cuentan con personal técnico especializado y administrativo, además de operarios encargados del mantenimiento de la infraestructura.
                        </Text>
                    </View>

                </View>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Text style={styles.backButtonText}>Regresar</Text>
                </TouchableOpacity>
            </ScrollView >
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#004B7F',
        alignItems: 'center',
    },
    announcesBox: {
        width: '100%',
        backgroundColor: '#00365C',
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
        marginTop: 40,
    },

    announcesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },
    announcesText: {
        color: '#00365C',
        fontSize: 13,
        marginBottom: 6,
        textAlign: 'justify',
    },
    whiteBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
    },
    backButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 10,
    },
    backButtonText: {
        color: '#004B7F',
        fontWeight: 'bold',
    },
})