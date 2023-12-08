import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

import { FiltersLinks } from "../constants";

const MenuBar = ({ title }) => {
    const theme = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.tertiary }]}>
            <Text variant='titleLarge' style={{ textTransform: 'uppercase', fontFamily: 'LexendBold', color: theme.colors.text3 }}>{title}</Text>
            <View style={[styles.filtersContainer, { backgroundColor: theme.colors.tertiary }]}>
                {FiltersLinks.map(({ id, title }) => (
                    <Text key={id} variant='bodyMedium' style={{ textTransform: 'uppercase', fontFamily: 'LexendBold', color: theme.colors.text3, marginEnd: 16 }}>{title}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 16
    },
    filtersContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
});

export default MenuBar;
