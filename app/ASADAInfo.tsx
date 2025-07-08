import { Link, Stack, useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function ASADAInfo() {
    const router = useRouter();

    return (

        <>
            <Stack.Screen options={{ headerShown: false }} />


            <ScrollView contentContainerStyle={styles.container}>
                {/* Buscador */}
                <View style={styles.searchContainer}>
                    <TextInput
                        placeholder="Buscar Asada......"
                        placeholderTextColor="#666"
                        style={styles.searchInput}
                    />
                    <Image
                        source={require('../assets/images/Icon-Search.png')}
                        style={styles.searchIcon}
                    />
                </View>

                {/* Tarjeta de información */}
                <View style={styles.card}>
                    <Image
                        source={require('../assets/images/Asadagol.jpg')}
                        style={styles.image}
                    />
                    <View style={styles.info}>
                        <Text style={styles.cardTitle}>ASADAGOL</Text>
                        <Text style={styles.text}>
                            <Text style={styles.bold}>Dirección: </Text>14, Provincia de Puntarenas, Golfito, Costa Rica
                        </Text>
                        <Text style={styles.text}>
                            <Text style={styles.bold}>Teléfono: </Text>88790671
                        </Text>
                        <Text style={styles.text}><Text style={styles.bold}>Horario:</Text></Text>
                        <Text style={styles.text}>lunes 7–11 a. m., 12–4 p. m.</Text>
                        <Text style={styles.text}>martes 7–11 a. m., 12–4 p. m.</Text>
                        <Text style={styles.text}>miércoles 7–11 a. m., 12–4 p. m.</Text>
                        <Text style={styles.text}>jueves 7–11 a. m., 12–4 p. m.</Text>
                        <Text style={styles.text}>viernes 7–11 a. m., 12–4 p. m.</Text>
                        <Text style={styles.text}>sábado <Text style={styles.bold}>Cerrado</Text></Text>
                        <Text style={styles.text}>domingo <Text style={styles.bold}>Cerrado</Text></Text>
                    </View>
                </View>

                {/* Botones de navegación */}
                <View style={styles.navButtons}>
                    <TouchableOpacity style={styles.navButton}><Text style={styles.navText}>Anterior</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.navButton}><Text style={styles.navText}>Siguiente</Text></TouchableOpacity>
                </View>

                {/* Estado */}
                <Text style={styles.status}>Estado: <Text style={styles.statusOpen}>Abierto</Text></Text>

                {/* Servicios */}
                <View style={styles.servicesBox}>
                    <Text style={styles.servicesTitle}>Tipo de servicio que brinda:</Text>
                    {[
                        'Suministro de Agua Potable',
                        'Construcción de Acueducto',
                        'Solicitud de Mantenimiento',
                        'Gestión de Aguas Residuales',
                        'Atención al Usuario',
                        'Capacitación y Educación',
                    ].map((service, index) => (
                        <View key={index} style={styles.serviceItem}>
                            <Text style={styles.bullet}>◼</Text>
                            <Text style={styles.serviceText}>{service}</Text>
                        </View>
                    ))}
                </View>

                {/* Botón afiliarme */}
                <Link href="/applicationForm" asChild>
                    <TouchableOpacity style={styles.joinButton}>
                        <Text style={styles.joinButtonText}>Afiliarme a esta ASADA</Text>
                    </TouchableOpacity>
                </Link>





                {/* Logo */}
                <Image
                    source={require('../assets/images/manantial-logo.png')}
                    style={styles.logo}
                />

                {/* Botón regresar */}
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Text style={styles.backButtonText}>Regresar</Text>
                </TouchableOpacity>
            </ScrollView>


        </>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#004B7F',
        alignItems: 'center',
    },
    searchContainer: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        padding: 10,
        color: '#000',
    },
    searchIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
        tintColor: '#000',
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        width: '100%',
        marginBottom: 10,
        padding: 10, // margen interno para que la imagen no quede pegada
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        alignItems: 'center', // centra verticalmente imagen y texto
    },
    image: {
        width: '48%',
        height: 180,
        borderRadius: 8, // redondeamos todos los bordes
        resizeMode: 'cover', // ajusta bien la imagen
        marginRight: 10, // espacio entre imagen y texto
    },
    info: {
        width: '48%',
        justifyContent: 'space-around', // reparte mejor el contenido
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 6,
    },
    text: {
        fontSize: 10,
        marginBottom: 2,
        textAlign: 'left',
        color: '#000',
        flexShrink: 1,
    },
    bold: {
        fontWeight: 'bold',
    },
    navButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 10,
    },
    navButton: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    navText: {
        color: '#004B7F',
        fontWeight: 'bold',
    },
    status: {
        color: '#fff',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    statusOpen: {
        color: 'lightgreen',
    },
    servicesBox: {
        backgroundColor: '#0A6DA3',
        borderRadius: 8,
        padding: 12,
        width: '100%',
        marginBottom: 20,
    },
    servicesTitle: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    serviceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    bullet: {
        color: '#fff',
        marginRight: 6,
    },
    serviceText: {
        color: '#fff',
        fontSize: 13,
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    joinButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 30,
    },
    joinButtonText: {
        color: '#004B7F',
        fontWeight: 'bold',
    },
    backButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 30,
    },
    backButtonText: {
        color: '#004B7F',
        fontWeight: 'bold',
    },

});
