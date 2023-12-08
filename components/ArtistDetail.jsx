import React from 'react';
import { View, StyleSheet } from 'react-native';

import DetailInfo from './DetailInfo';
import Swiper from './Swiper';

import FeaturedSection from './FeaturedSection';

const ArtistDetail = ({ array, id }) => {

  return (
    <View styles={styles.container}>
      <DetailInfo array={array} />
      <FeaturedSection title="Their hall" content={<Swiper array={array.albums} />}/> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '16px',
    width : '80%',
  },
});

export default ArtistDetail;