import React from 'react';
import { View } from 'react-native';

import ListDetail from './ListDetail'
import DetailInfo from './DetailInfo';

import FeaturedSection from './FeaturedSection';

const AlbumDetail = ({ array, id }) => {

  return (
    <View>
      <DetailInfo array={array} />
      <FeaturedSection title="Track List" content={<ListDetail array={array.songs} />} />
    </View>
  );
};


export default AlbumDetail;