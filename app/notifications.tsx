/**
 * Está pantalla es la encargada de mostrar la información de las notificaciones.
 */
import { View, Text, StyleSheet } from 'react-native';

/**
 * En está pantalla se utiliza la clase de Text para poder mostrar un texto, si llegara una notificación se mostraría aca.
 * @returns La pantalla con el texto introducido.
 */
const Notification: React.FC = ({ }) => {
    return(
          <View style={styles.notificationBox}>
            <Text style={styles.notificationText}>
              Aquí verá sus notificaciones más recientes
            </Text>
          </View>
    );
}

export default Notification;

const styles = StyleSheet.create({
      notificationBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },

  notificationText: {
    color: '#00365C',
    fontSize: 14,
    textAlign: 'center',
  },
})