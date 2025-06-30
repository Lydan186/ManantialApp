import { Image } from 'expo-image';
import { StyleSheet, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';
import { View } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
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
        />
        <TextInput
          style={styles.input}
          placeholder='Contraseña'
          placeholderTextColor="#B0C4DE"
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotText}>¿Olvidó su usuario o contraseña?</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.whiteButton}>
            <Text style={styles.buttonTextBlack}>Crear Usuario</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.whiteButton}>
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
