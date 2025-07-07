import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput } from 'react-native';
import React, { useState } from 'react';

type Props = {
  router: any;
  setActiveTab: (tab: string) => void;
};

const Report: React.FC<Props> = ({ router, setActiveTab }) => {

      const [type, setType] = useState('');
      const [provider, setProvider] = useState('');
      const [details, setDetails] = useState('');
      const [address, setAddress] = useState('');
      const [urgency, setUrgency] = useState('');

      return(
    
<View style={styles.reportBox}>
            {/* Hooks requeridos */}
            <Text style={styles.label}>Tipo de reporte</Text>
            <View style={styles.row}>
              <View style={{ flex: 1, marginRight: 5 }}>
                <TextInput
                  placeholder="Tipo de reporte"
                  value={type}
                  onChangeText={setType}
                  style={styles.inputBox}
                  placeholderTextColor="#999"
                />
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <TextInput
                  placeholder="Proveedor del Servicio"
                  value={provider}
                  onChangeText={setProvider}
                  style={styles.inputBox}
                  placeholderTextColor="#999"
                />
              </View>
            </View>

            <Text style={styles.label}>Detalle del Reporte</Text>
            <TextInput
              placeholder="Describa el problema..."
              value={details}
              onChangeText={setDetails}
              multiline
              style={styles.textArea}
              placeholderTextColor="#999"
            />

            <Text style={styles.label}>Dirección</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TextInput
                placeholder="Dirección de residencia"
                value={address}
                onChangeText={setAddress}
                style={[styles.inputBox, { flex: 1 }]}
                placeholderTextColor="#999"
              />
              <Image
                source={require('@/assets/images/manantial-logo.png')}
                style={{ width: 60, height: 60, marginLeft: 10, resizeMode: 'contain' }}
              />
            </View>

            <Text style={styles.label}>Nivel de Urgencia:</Text>
            <View style={styles.urgencyRow}>
              {['Poca', 'Moderada', 'Mucha'].map((level) => (
                <TouchableOpacity
                  key={level}
                  style={styles.checkboxContainer}
                  onPress={() => setUrgency(level)}
                >
                  <View style={[styles.checkbox, urgency === level && { backgroundColor: '#00BFFF' }]} />
                  <Text style={styles.urgencyText}>{level}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Enviar Reporte</Text>
            </TouchableOpacity>

            <View style={styles.historyBox}>
              <Text style={styles.label}>Historial de Reportes</Text>
              <View style={styles.historyItem}>
                <Text style={styles.historyText}>
                  Aquí se visualizarán sus reportes
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.extendButton}>
              <Text style={styles.extendButtonText}>Extender Historial</Text>
            </TouchableOpacity>
          </View>
      );
      
}
export default Report;

const styles = StyleSheet.create({
 reportBox: {
    width: '100%',
    backgroundColor: '#00365C',
    padding: 12,
    borderRadius: 8,
    alignItems: 'stretch',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    color: 'white',
    fontSize: 13,
    marginBottom: 2,
  },
  inputBox: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 8,
    minHeight: 36,
    justifyContent: 'center',
    marginBottom: 8,
  },
  inputDropdown: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 8,
    minHeight: 36,
    justifyContent: 'center',
    marginBottom: 8,
  },
  inputText: {
    color: '#333',
    fontSize: 13,
  },
  textArea: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 8,
    minHeight: 70,
    marginBottom: 8,
  },
  urgencyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#004B7F',
    borderRadius: 3,
    marginRight: 4,
    backgroundColor: 'white',
  },
  urgencyText: {
    color: 'white',
    fontSize: 13,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  sendButtonText: {
    color: '#004B7F',
    fontWeight: 'bold',
    fontSize: 15,
  },
  historyBox: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 8,
    marginBottom: 10,
  },
  historyItem: {
    backgroundColor: '#F4F4F4',
    borderRadius: 4,
    padding: 5,
    marginTop: 4,
  },
  historyText: {
    color: '#222',
    fontSize: 16,
  },
  extendButton: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 2,
  },
  extendButtonText: {
    color: '#004B7F',
    fontWeight: 'bold',
    fontSize: 16,
  },
})