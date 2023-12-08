import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';
import { View, StyleSheet, ImageBackground } from 'react-native';

import { useTheme } from 'react-native-paper';

import Loader from "../../components/Loader";
import AlbumDetail from '../../components/AlbumDetail'

import { rockwellBg } from '../../assets/img';



const AlbumScreen = () => {
  const theme = useTheme();

  const [loading, setLoading] = useState(true);

  const { id } = useLocalSearchParams();
  const [album, setAlbum] = useState();

  useEffect(() => {
    fetch(`https://albums-api.onrender.com/albums/${id}`)
      .then((res) => res.json(res))
      .then((data) => {
        setAlbum(data);
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
                headerStyle: { backgroundColor: '#000',  borderWidth: 0, borderColor: '#000'},
                headerTintColor: theme.colors.primary,
                title: '',
                headerTransparent: false,

              }} />
            <AlbumDetail styles={styles.detailContainer} array={album} id={id}/>
          </ImageBackground>
        </View>
        )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
  },
  detailContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: '100%',
    paddingBottom: 24,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%'

  },
});

export default AlbumScreen;
