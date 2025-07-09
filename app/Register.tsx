/**
 * Está pantalla es la encargada de realizar el registro de usuario en la aplicación.
 */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../scripts/conexiónFirebase';
import { auth } from '../scripts/conexiónFirebase';


/**
 * En esta se presentan multiples useState para poder obtener los valores necesarios para la creación del usuario, para despues usar
 * la función de createUserwithEmailAndPassword, además de usar el setDoc, que llama a la collection de "usuarios", esto utilizando todos los datos
 * anteriormente seteados.
 * @returns La pantalla de registro de usuario.
 */
const RegisterScreen = () => {

    const [provincia, setProvincia] = useState('');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [canton, setCanton] = useState('');
    const [distrito, setDistrito] = useState('');
    const [direccion, setDireccion] = useState('');

    const router = useRouter();

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "usuarios", user.uid), {
                nombre,
                email,
                telefono,
                provincia,
                canton,
                distrito,
                direccion,
                uid: user.uid,
                creadoEn: new Date(),
            });

            alert("¡Usuario registrado exitosamente!");
            router.push('/');
        } catch (error: any) {
            console.error("Error en Firebase:", error.code, error.message);
            alert("Error al registrar: " + error.message);
        }
    };

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={require('@/assets/images/manantial-logo.png')}
                    style={styles.logo}
                />

                <Text style={styles.header}>Registro de Usuario</Text>

                <View style={styles.formBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre Completo:"
                        placeholderTextColor="#fff"
                        value={nombre}
                        onChangeText={setNombre}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Correo Electrónico:"
                        placeholderTextColor="#fff"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Número de Teléfono:"
                        placeholderTextColor="#fff"
                        keyboardType="phone-pad"
                        value={telefono}
                        onChangeText={setTelefono}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña:"
                        placeholderTextColor="#fff"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar Contraseña:"
                        placeholderTextColor="#fff"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Provincia:"
                        placeholderTextColor="#fff"
                        value={provincia}
                        onChangeText={setProvincia}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Cantón:"
                        placeholderTextColor="#fff"
                        value={canton}
                        onChangeText={setCanton}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Distrito:"
                        placeholderTextColor="#fff"
                        value={distrito}
                        onChangeText={setDistrito}
                    />
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Dirección:"
                        placeholderTextColor="#fff"
                        multiline
                        numberOfLines={4}
                        value={direccion}
                        onChangeText={setDireccion}
                    />

                    <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                        <Text style={styles.registerButtonText}>Registrarse</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => router.push('/')}
                    >
                        <Text style={styles.backButtonText}>Regresar</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#004B7F',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 20,
        flexGrow: 1,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    header: {
        backgroundColor: '#fff',
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 25,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 45,
        backgroundColor: '#00A2FF',
        borderRadius: 25,
        paddingHorizontal: 20,
        marginBottom: 15,
        color: '#fff',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    dropdown: {
        backgroundColor: '#00A2FF',
        borderRadius: 25,
        borderWidth: 0,
        marginBottom: 15,
    },
    dropdownText: {
        color: '#fff',
    },
    dropdownContainer: {
        backgroundColor: '#00A2FF',
        borderWidth: 0,
        marginBottom: 15,
    },
    registerButton: {
        backgroundColor: '#0077CC',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    registerButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    formBox: {
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#00A2FF',
        padding: 20,
        width: '100%',
        marginBottom: 30,
    },
    backButton: {
        backgroundColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },

    backButtonText: {
        color: '#004B7F',
        fontWeight: 'bold',
        fontSize: 16,
    },


});
