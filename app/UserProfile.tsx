import { getAuth, signOut } from 'firebase/auth';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'; // Importa updateDoc
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'; // Importa Modal y TextInput
import { app } from '../scripts/conexiónFirebase';

type Props = {
  router: any;
  setActiveTab: (tab: string) => void;
};

const UserProfileTab: React.FC<Props> = ({ router, setActiveTab }) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [newValue, setNewValue] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth(app);
      const db = getFirestore(app);
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'usuarios', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
      setLoading(false);
    };
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      router.replace('/');
    } catch (e) {
      Alert.alert('Error', 'No se pudo cerrar sesión');
    }
  };

  const handleSaveEdit = async () => {
    if (!editingField || !userData) return;
    try {
      const auth = getAuth(app);
      const db = getFirestore(app);
      const user = auth.currentUser;
      if (!user) return;

      const userRef = doc(db, 'usuarios', user.uid);
      await updateDoc(userRef, {
        [editingField]: newValue,
      });

      setUserData({ ...userData, [editingField]: newValue });
      setEditingField(null);
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar el cambio');
    }
  };

  if (loading) return <ActivityIndicator color="#00BFFF" style={{ marginTop: 40 }} />;
  if (!userData) return <Text style={{ color: 'white', marginTop: 20 }}>No se encontraron datos.</Text>;

  return (
    <View style={userStyles.profileContainer}>
      <View style={userStyles.card}>
        <ProfileField label="Nombre Completo" value={userData.nombre} bold onEdit={() => { setEditingField('nombre'); setNewValue(userData.nombre); }} />
        <ProfileField label="Correo Electrónico" value={userData.email} small onEdit={() => { setEditingField('email'); setNewValue(userData.email); }} />
        <ProfileField label="Número de Teléfono" value={userData.telefono} bold onEdit={() => { setEditingField('telefono'); setNewValue(userData.telefono); }} />
        <ProfileField label="Contraseña" value="********" onEdit={() => { setEditingField('contraseña'); setNewValue(''); }} />
        <ProfileField label="Provincia" value={userData.provincia} onEdit={() => { setEditingField('provincia'); setNewValue(userData.provincia); }} />
        <ProfileField label="Cantón" value={userData.canton} onEdit={() => { setEditingField('canton'); setNewValue(userData.canton); }} />
        <ProfileField label="Distrito" value={userData.distrito} onEdit={() => { setEditingField('distrito'); setNewValue(userData.distrito); }} />
        <ProfileField label="Dirección" value={userData.direccion} small onEdit={() => { setEditingField('direccion'); setNewValue(userData.direccion); }} />

        <View style={userStyles.field}>
          <Text style={userStyles.labelAsada}>Su Asada Actual</Text>
          <View style={userStyles.row}>
            <Text style={userStyles.valueAsada}>
              {userData.asadaActual?.trim() ? userData.asadaActual : 'No se ha afiliado a ninguna ASADA'}
            </Text>
            <TouchableOpacity style={userStyles.asadaButton} onPress={() => {
              Alert.alert('Gestión ASADA', 'Funcionalidad en desarrollo');
            }}>
              <Text style={userStyles.asadaButtonText}>Gestionar Mi ASADA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={userStyles.footerRow}>
        <TouchableOpacity style={userStyles.footerButton} onPress={() => setActiveTab('home')}>
          <Text style={userStyles.footerButtonText}>Regresar al Inicio</Text>
        </TouchableOpacity>
        <Image source={require('@/assets/images/manantial-logo.png')} style={userStyles.footerLogo} />
        <TouchableOpacity style={userStyles.footerButton} onPress={handleLogout}>
          <Text style={userStyles.footerButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

      {editingField && (
        <Modal transparent animationType="slide" visible>
          <View style={userStyles.modalOverlay}>
            <View style={userStyles.modalView}>
              <Text style={userStyles.modalTitle}>Editar {editingField}</Text>
              <TextInput
                style={userStyles.modalInput}
                value={newValue}
                onChangeText={setNewValue}
              />
              <View style={userStyles.modalButtons}>
                <TouchableOpacity
                  style={[userStyles.modalButton, userStyles.modalButtonCancel]}
                  onPress={() => setEditingField(null)}
                >
                  <Text style={userStyles.modalButtonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[userStyles.modalButton, userStyles.modalButtonSave]}
                  onPress={handleSaveEdit}
                >
                  <Text style={userStyles.modalButtonText}>Guardar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

type ProfileFieldProps = {
  label: string;
  value: string;
  bold?: boolean;
  small?: boolean;
  onEdit?: () => void;
};

const ProfileField: React.FC<ProfileFieldProps> = ({ label, value, bold, small, onEdit }) => (
  <View style={userStyles.field}>
    <Text style={userStyles.label}>{label}</Text>
    <View style={userStyles.row}>
      <Text style={[
        userStyles.value,
        bold && { fontWeight: 'bold' },
        small && { fontSize: 13 }
      ]}>{value}</Text>
      {onEdit && (
        <TouchableOpacity style={userStyles.editButton} onPress={onEdit}>
          <Text style={userStyles.editButtonText}>Editar</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default UserProfileTab;



const userStyles = StyleSheet.create({
 profileContainer: {
  flex: 1,
  width: '100%',
  
  alignItems: 'center',
  backgroundColor: '#0066A1', // Mismo fondo azul que el resto
  paddingBottom: 50,
},
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 2.0,
    elevation: 4,
  },
  field: {
    height: 70,
    marginBottom: 10,
  },
  label: {
    
    color: '#0099ff',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 2,
  },
  labelAsada: {
    color: '#0099ff',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 2,
  },
  row: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  value: {
    color: '#222',
    fontSize: 15,
    flex: 1,
  },
  valueAsada: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
  },
  editButton: {
    backgroundColor: '#22aaff',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 7,
    marginLeft: 10,
    elevation: 2,
    minWidth: 70,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  asadaButton: {
    backgroundColor: '#22aaff',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 7,
    marginLeft: 10,
    elevation: 2,
    minWidth: 130,
    alignItems: 'center',
  },
  asadaButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  footerRow: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    elevation: 4,
    marginBottom: 10,
  },
  footerButton: {
    backgroundColor: '#22aaff',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 2,
  },
  footerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  footerLogo: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },


//Css para la edición

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#004B7F',
  },
  modalInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  modalButtonSave: {
    backgroundColor: '#22aaff',
  },
  modalButtonCancel: {
    backgroundColor: '#ccc',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },

  
});
