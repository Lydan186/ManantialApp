import { Link, Stack, useRouter, } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserProfileTab from './UserProfile';
import Announces from './announces';
import Chats from './chats';
import Notification from './notifications';
import Report from './reports';


export default function Home() {

  //Datos de usuario
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);


  const router = useRouter();
  const [activeTab, setActiveTab] = useState('home');

  const [type, setType] = useState('');
  const [provider, setProvider] = useState('');
  const [details, setDetails] = useState('');
  const [address, setAddress] = useState('');
  const [urgency, setUrgency] = useState('');


  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Navbar FUERA del ScrollView y pegado arriba */}
      <SafeAreaView style={styles.navbarContainer} edges={['top']}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => setActiveTab('home')}>
            <View style={[styles.iconCircle, activeTab === 'home' && styles.activeCircle]}>
              <Image style={styles.icon} source={require('@/assets/images/Icon-Home.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('reports')}>
            <View style={[styles.iconCircle, activeTab === 'reports' && styles.activeCircle]}>
              <Image style={styles.icon} source={require('@/assets/images/Icon-Reports.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('announces')}>
            <View style={[styles.iconCircle, activeTab === 'announces' && styles.activeCircle]}>
              <Image style={styles.icon} source={require('@/assets/images/Icon-Anounces.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('chats')}>
            <View style={[styles.iconCircle, activeTab === 'chats' && styles.activeCircle]}>
              <Image style={styles.icon} source={require('@/assets/images/Icon-Chat.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('notifications')}>
            <View style={[styles.iconCircle, activeTab === 'notifications' && styles.activeCircle]}>
              <Image style={styles.icon} source={require('@/assets/images/Icon-Notification.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('user')}>
            <View style={[styles.iconCircle, activeTab === 'user' && styles.activeCircle]}>
              <Image style={styles.icon} source={require('@/assets/images/Icon-User.png')} />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>


      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >


        {activeTab === 'home' && (
          <>
            <View style={styles.darkBox}>
              <Text style={styles.title}>Su ASADA más cercana respecto a su zona Geográfica</Text>
              <View style={styles.mapPhotoContainer}>
                <Image source={require('@/assets/images/Mapa-Asadagol.png')} style={styles.mapImage} />
                <Image source={require('@/assets/images/Asadagol.jpg')} style={styles.photoImage} />
              </View>
              <View style={styles.rowButtons}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Contactar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Ver más sugerencias</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Link href="/ASADAInfo" asChild>
            <TouchableOpacity style={styles.wideButton}>
              <Text style={styles.buttonText}>Solicite los servicios de una ASADA Aquí</Text>
            </TouchableOpacity>
          </Link>

          <Link href='/asadaInformation' asChild>
            <TouchableOpacity style={styles.wideButton}>
              <Text style={styles.buttonText}>Quiero informarme sobre las ASADAS</Text>
            </TouchableOpacity>
            </Link>
            <Image style={styles.logo} source={require('@/assets/images/manantial-logo.png')} />
          </>

        )
        }

        {activeTab === 'reports' && (
          <Report router={router} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'announces' && (
          <Announces router={router} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'chats' && (
          <Chats router={router} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'notifications' && (
          <Notification router={router} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'user' && (
          <UserProfileTab router={router} setActiveTab={setActiveTab} />
        )}


      </ScrollView>

    </>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  darkBox: {
    width: '100%',
    backgroundColor: '#004B7F',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  mapPhotoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  mapImage: {
    width: width * 0.42,
    height: 120,
    borderRadius: 10,
  },
  photoImage: {
    width: width * 0.42,
    height: 120,
    borderRadius: 10,
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
  },
  wideButton: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 12,
    marginBottom: 15,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 10,
    resizeMode: 'contain',
  },
  tabContent: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#004B7F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCircle: {
    backgroundColor: '#00BFFF',
  },
  navbarContainer: {
    width: '100%',
    backgroundColor: '#004B7F',
    paddingVertical: 10,
  },

  container: {
    paddingHorizontal: 20,
    paddingTop: 20, 
    backgroundColor: '#0066A1',
    alignItems: 'center',
    paddingBottom: 50,
    height: '100%',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#0066A1', 
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
  },


});