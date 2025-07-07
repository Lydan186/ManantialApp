import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

type Props = {
    router: any;
    setActiveTab: (tab: string) => void;
};

const Chats: React.FC<Props> = ({ router, setActiveTab }) => {

    return (
        <View style={styles.chatContainer}>
            <View style={styles.chatBox}>
                <Text style={styles.chatText}>
                    Aquí verá sus chats más recientes
                </Text>

                <Image
                    source={require('@/assets/images/Icon-Chat.png')}
                    style={styles.chatIcon}
                />
            </View>

            <TouchableOpacity style={styles.newChatButton}>
                <Text style={styles.newChatText}>+ Nuevo Chat</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Chats;

const styles = StyleSheet.create({
    chatContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },

    chatBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20,
        marginTop: 40,
    },

    chatText: {
        color: '#00365C',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 15,
    },

    chatIcon: {
        width: 80,
        height: 80,
        tintColor: '#004B7F', // Puedes quitar esto si la imagen ya es azul
        resizeMode: 'contain',
    },

    newChatButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        elevation: 3,
    },

    newChatText: {
        color: '#004B7F',
        fontWeight: 'bold',
    },
})