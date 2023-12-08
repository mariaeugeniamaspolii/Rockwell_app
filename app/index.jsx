import { ALBUMS_API } from 'react-native-dotenv';

import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { useTheme } from 'react-native-paper';

import Loader from "../components/Loader";
import Hero from '../components/Hero';
import MenuBar from '../components/MenuBar';
import Searchbar from '../components/Searchbar';
import Catalogue from '../components/Catalogue';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  useEffect(() => {
    fetch(`${ALBUMS_API}/albums`)
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
        setLoading(false);
        setFilteredAlbums(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const filtered = albums.filter(
      (album) =>
        album.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        album.artist.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredAlbums(filtered);
  }, [searchQuery, albums]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

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
        <ScrollView>
          <Stack.Screen options={{ title: 'Home', headerShown: false }} />
          <Hero />
          <MenuBar title="Explore by genre" />
          <View style={{ display: 'grid', width: '100%', padding: 16}}>

            <Searchbar
              placeholder="Search albums"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{ width: '100%' }}
            />
            <Catalogue array={filteredAlbums} />
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default HomeScreen;
