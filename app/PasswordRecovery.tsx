/**
 * 
 */

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, StyleSheet } from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { app } from '../scripts/conexiónFirebase';

/**
 * 
 * @returns 
 */
export default function PasswordRecovery() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleResetPassword = async () => {
    if (!email.includes('@')) {
      Alert.alert('Correo inválido', 'Ingrese un correo electrónico válido.');
      return;
    }

    try {
      const auth = getAuth(app);
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Correo enviado', 'Revise su bandeja de entrada para continuar.');
      router.replace('/');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Error', 'No se pudo enviar el correo. Verifique el correo ingresado.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitud de restablecimiento de Contraseña</Text>
      <Image source={require('@/assets/images/manantial-logo.png')} style={styles.logo} />
      <Text style={styles.label}>Digite su correo</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0066A1', 
    padding: 20, 
    justifyContent: 'center' 
  },
  title: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 30 
  },
  logo: { 
    width: 100, 
    height: 100, 
    alignSelf: 'center', 
    marginBottom: 20 
  },
  label: { 
    color: 'white', 
    textAlign: 'center', 
    marginBottom: 10 
  },
  input: {
    backgroundColor: '#004B7F',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 40,
  },
  buttonText: { 
    color: '#0066A1', 
    fontWeight: 'bold' 
  },
});
