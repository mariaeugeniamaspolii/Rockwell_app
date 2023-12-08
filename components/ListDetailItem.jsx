import React from 'react'
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

const ListItem = ({ song: { id, name, duration }, index }) => {
    const theme = useTheme();

    return (
        <View style={{ borderBottomWidth: 0.5, borderColor: theme.colors.secondary, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 24 }}>
            <View style={{ flexDirection: 'row' }}>
                <Text>{index + 1 + '.'}</Text>
                <Text style={{ marginStart: 4, color: theme.colors.secondary }} key={id}>{name}</Text>
            </View>
            <Text >{duration}</Text>
        </View>
    )
}

export default ListItem;