import { Image } from 'expo-image';
import { StyleSheet, TextInput, Text, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../scripts/conexiónFirebase';



export default function HomeScreen() {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  return (
    <View style={styles.container}>

      <Image
        source={require('@/assets/images/manantial-logo.png')}
        style={styles.logo}
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
    width: 200,
    height: 200,
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
