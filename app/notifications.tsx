import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

type Props = {
  router: any;
  setActiveTab: (tab: string) => void;
};

const Notification: React.FC<Props> = ({ router, setActiveTab }) => {
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