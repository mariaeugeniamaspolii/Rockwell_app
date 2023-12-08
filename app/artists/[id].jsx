import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';
import { View, StyleSheet, ImageBackground } from 'react-native';

import { useTheme } from 'react-native-paper';

import Loader from "../../components/Loader";
import ArtistDetail from '../../components/ArtistDetail'

import { rockwellBg } from '../../assets/img';

const ArtistScreen = () => {
  const theme = useTheme();

  const { id } = useLocalSearchParams();
  const [artist, setArtist] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://albums-api.onrender.com/artists/${id}`)
      .then((res) => res.json(res))
      .then((data) => {
        setArtist(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [id]);

  return (
    <>
      {loading ? (
        <View>
          <Stack.Screen
            options={{
              title: '',
              headerTransparent: true,

            }} />
          <Loader />
        </View>
      ) : (
        <View styles={styles.container}>
          <ImageBackground source={rockwellBg} resizeMode="cover" style={styles.image}>
            <Stack.Screen
              options={{
                headerStyle: { backgroundColor: '#000', borderWidth: 0 },
                headerTintColor: theme.colors.primary,
                title: '',
                headerTransparent: false,

              }} />
            <ArtistDetail styles={styles.detailContainer} array={artist} id={id} />
          </ImageBackground>
        </View>)}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
    padding: 16,
  },
  detailContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: '100%',
    padding: 16,
    paddingBottom: 24,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
});

export default ArtistScreen;


