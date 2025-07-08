import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type Props = {
  router: any;
  setActiveTab: (tab: string) => void;
};

const Announces: React.FC<Props> = ({ router, setActiveTab }) => {

    return (
          <View style={styles.announcesBox}>
            <Text style={styles.announcesTitle}>Anuncios</Text>

            <View style={styles.whiteBox}>
              <Text style={styles.announcesText}>
                <Text style={{ fontWeight: 'bold' }}>La Asada de Golfito (ASADAGOL),</Text> ha iniciado con el
                proyecto denominado:
              </Text>
              <Text style={styles.announcesText}>
                <Text style={{ fontWeight: 'bold' }}>
                  Programa Ambiental de las comunidades para el desarrollo Sostenible medio ambiente y el
                  Recurso Hídrico en Costa Rica
                </Text>
              </Text>
              <Text style={styles.announcesText}>
                El día de hoy 31 de julio, el personal de esta asada, efectuaron siembra de árboles de
                Especies como Almendro Amarillo, Sota caballo, Cedro, Gallinazo Roble Sabana, sector
                Finca Ambiental, Asadagol Llano Bonito y en las orillas de quebrada de la Mona de Golfito.
              </Text>

              <View style={styles.imageGrid}>
                <Image source={require('@/assets/images/Anuncios/Imagen-Anuncio.jpg')} style={styles.gridImage} />
                <Image source={require('@/assets/images/Anuncios/Imagen-Anuncio2.jpg')} style={styles.gridImage} />
                <Image source={require('@/assets/images/Anuncios/Imagen-Anuncio3.jpg')} style={styles.gridImage} />
                <Image source={require('@/assets/images/Anuncios/Imagen-Anuncio4.jpg')} style={styles.gridImage} />
              </View>
            </View>

            <View style={styles.alertBox}>
              <Text style={styles.alertText}>
                <Text style={{ fontWeight: 'bold' }}>¡Atención!{"\n"}</Text>
                Corte del servicio de Agua el 30 de mayo debido a mantenimiento de 12 am a 3 pm{"\n"}
                - ASADAGOL
              </Text>
            </View>
          </View>
    );
}

export default Announces;

const styles = StyleSheet.create({
  announcesBox: {
    width: '100%',
    backgroundColor: '#00365C',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },

  announcesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },

  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 15,
  },

  gridImage: {
    width: '48%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },

  alertBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
  },

  alertText: {
    color: '#00365C',
    fontSize: 14,
    textAlign: 'center',
  },
  whiteBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  announcesText: {
    color: '#00365C',
    fontSize: 13,
    marginBottom: 6,
    textAlign: 'justify',
  },
});