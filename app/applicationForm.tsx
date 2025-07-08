import { Stack, useRouter, } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const ApplicationForm = () => {
    const router = useRouter();
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        // Aquí puedes manejar el envío del formulario
    };

    return (

        <>

            <Stack.Screen options={{ headerShown: false }} />

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Formulario de solicitud de servicio</Text>
                <Text style={styles.subtitle}>
                    Complete con sus datos el siguiente formulario para afiliarse al servicio de la ASADA [ASADAGOL]
                </Text>

                {/* Nombre */}
                <Text style={styles.label}>Nombre:</Text>
                <Controller
                    control={control}
                    name="nombre"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder=""
                        />
                    )}
                />

                {/* Apellidos */}
                <Text style={styles.label}>Apellidos:</Text>
                <Controller
                    control={control}
                    name="apellidos"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder=""
                        />
                    )}
                />

                {/* Ubicación */}
                <Text style={styles.label}>Ubicación:</Text>
                <Controller
                    control={control}
                    name="ubicacion"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder=""
                        />
                    )}
                />

                {/* Email */}
                <Text style={styles.label}>Email:</Text>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder=""
                            keyboardType="email-address"
                        />
                    )}
                />

                {/* Tipo de Servicio */}
                <Text style={styles.label}>Tipo de Servicio:</Text>
                <Controller
                    control={control}
                    name="tipoServicio"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder=""
                        />
                    )}
                />

                {/* Detalle */}
                <Text style={styles.label}>Detalle:</Text>
                <Controller
                    control={control}
                    name="detalle"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.textarea}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Escriba aquí..."
                            multiline
                            numberOfLines={6}
                        />
                    )}
                />

                <View style={styles.navButtons}>
                    <TouchableOpacity style={styles.navButton}><Text style={styles.navText}>Enviar Formulario</Text></TouchableOpacity>
                </View>

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
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    textarea: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        height: 100,
        textAlignVertical: 'top',
        marginBottom: 15,
    },
    buttonContainer: {
        marginTop: 20,
    },
    backButton: {
        backgroundColor: '#004B7F',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 30,
    },
    backButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    navButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 10,
    },
    navButton: {
        backgroundColor: '#004B7F',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 30,
    },
    navText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default ApplicationForm;
