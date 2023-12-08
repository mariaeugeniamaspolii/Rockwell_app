import React from 'react'
import { View } from 'react-native';

import ListDetailItem from './ListDetailItem'

const List = ({ array }) => {
    return (
        <View >
            {array.map((song, index) => (
                <ListDetailItem key={song.id} song={song} index={index} />
            ))}
        </View >
    )
}

export default List;