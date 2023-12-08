import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Text, useTheme } from 'react-native-paper';

import Button from './Button'
import ArtistWikiDescription from './ArtistWikiDescription'

const List = ({ array }) => {
    const theme = useTheme();


    const descriptionContent = (array.artist)
        ? (
            <>
                <Link href={`/artists/${array.artist.id}`}>
                    <Text variant="titleMedium" style={{ color: theme.colors.primary, textTransform: 'uppercase', fontFamily: 'LexendBold' }}>
                        {array.artist.name}
                    </Text>
                </Link>
                <View style={styles.description}>
                    <Text style={{ color: theme.colors.text2 }}>Formats: {array.formats.join(', ')}</Text>
                    <Text style={{ color: theme.colors.text2 }}>{array.year}</Text>
                </View>

            </>
        )
        : (
            <ArtistWikiDescription array={array} style={styles.description} />
        );

    return (
        <View style={styles.container} >
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: array.image || array.cover }} accessibilityLabel={array.name + " cover"}/>
            </View>
            <Text variant="titleLarge" style={{ color: theme.colors.text3, textTransform: 'uppercase', fontFamily: 'LexendBold', marginBottom: 12 }}>{array.name}</Text>

                {descriptionContent}
            <View style={styles.buttons}>
                <Button mode="contained" BColor={theme.colors.primary} label="Save to collection" icon="bookmark-outline" compact="false" style={styles.button} />
                <Button mode="outlined" label="Play" icon="youtube" textColor={theme.colors.primary} style={styles.button} />
                <Button mode="outlined" BColor="primary" label="Play" icon="spotify" textColor={theme.colors.primary} style={styles.button} />
            </View>

        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingVertical: 24,
    },
    imageContainer: {
        width: '100%',
        aspectRatio: 1,
        marginBottom: 24,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
    },
    button: {
        marginRight: 12,
        marginBottom: 12,
    }
});

export default List;