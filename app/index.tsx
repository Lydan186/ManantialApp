/**
 * Está pantalla se encarga del inicio de sesión, además de redirigir hacia la pantalla de si olvido la contraseña o la de crear usuario.
 */
import { Image } from 'expo-image';
import { Link, useRouter } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { app } from '../scripts/conexiónFirebase';


/**
 * Aquí se crean las variables constantes para el uso de la aplicación, en la constante de handleLogin se pasan los parametros capturados por los inputs, 
 * estos se capturan gracias al useState, si estos no son correctos se presenta un mensaje de error, pero si son correctos se usa la constante del auth, en donde 
 * consigue los datos de la autenticación gracias a la conexión con Firebase, después se usa la función de signInWithEmailAndPassword, en donde se pasa la variable de auth, 
 * email y password, ya que son correctas se envia al usuario al inicio de la aplicación.
 * @returns 
 */
export default function HomeScreen() {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logoLoading, setLogoLoading] = useState(true);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor ingresa correo y contraseña');
      return;
    }
    const auth = getAuth(app);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/Home');
    } catch (error) {
      Alert.alert('Error de inicio de sesión', 'Correo o contraseña incorrectos');
      console.error('Login error:', error);
    }
  };


  {
    logoLoading && (
      <ActivityIndicator size="large" color="#fff" style={{ position: 'absolute', top: 100 }} />
    )
  }


  return (
    <View style={styles.container}>

      <Image
        source={require('@/assets/images/manantial-logo.png')}
        style={styles.logo}
        contentFit="contain"
        transition={200}
        onLoadEnd={() => setLogoLoading(false)}
      />

      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder='Usuario o Correo electrónico'
          placeholderTextColor="#B0C4DE"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder='Contraseña'
          placeholderTextColor="#B0C4DE"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <TouchableOpacity onPress={() => router.push('/PasswordRecovery')}>
          <Text style={styles.forgotText}>¿Olvidó su usuario o contraseña?</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <Link href="/Register" asChild>
            <TouchableOpacity style={styles.whiteButton}>
              <Text style={styles.buttonTextBlack}>Crear Usuario</Text>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity style={styles.whiteButton} onPress={handleLogin}>
            <Text style={styles.buttonTextBlack}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066A1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginTop: 30,
    resizeMode: 'contain',
  },
  content: {
    marginTop: 30,
    width: '85%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 55,
    borderRadius: 20,
    backgroundColor: '#004B7F',
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  forgotText: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 20,
  },
  whiteButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 25,
    flex: 1,
    alignItems: 'center',
  },
  buttonTextBlack: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
