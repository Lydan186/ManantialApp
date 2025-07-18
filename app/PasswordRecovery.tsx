/**
 * Está pantalla se encarga de la recuperación de la contraseña para la cuenta que se haya digitado en el sistema.
 */

import { Stack, useRouter } from 'expo-router';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { app } from '../scripts/conexiónFirebase';

/**
 * En está pantalla se usa la función del sendPasswordResetEmail, esto usando el useState 
 * de email para que a la hora de digitar el correo se envie un correo electronico al 
 * correo que se digite y se realice el cambio de la contraseña.
 * @returns La pantalla de la recuperación de contraseña.
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
    <>
      <Stack.Screen options={{ headerShown: false }} />

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
        <View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/')}
        >
          <Text style={styles.buttonText}>Regresar</Text>
        </TouchableOpacity>
        </View>
      </View>
      
    </>
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
    marginTop: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: '#0066A1',
    fontWeight: 'bold'
  },
  
});
