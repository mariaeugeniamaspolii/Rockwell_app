import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

import Button from '../components/Button';

import { rockwellHeroMobile } from '../assets/img';

const HeroSection = ({ }) => {
    const theme = useTheme();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={rockwellHeroMobile}
                style={[styles.bgimage, {
                    bottom: 0,
                    position: 'relative',
                    top: undefined
                }]}
            >
                <View style={styles.header}>
                    <View >

                        <Text variant='displayMedium' style={{ fontFamily: 'LexendBlack', textTransform: 'uppercase', color: theme.colors.text3 }}>Hall of</Text>
                        <Text variant='displayLarge' style={{ fontFamily: 'LexendBlack', textTransform: 'uppercase', fontSize: 76, color: theme.colors.primary }}>legends</Text>
                        <Text variant='titleMedium' style={{ color: theme.colors.text2, marginTop: 16 }} numberOfLines={2}>Top 50 all time rock and metal {'\n'}
                            ultimate collection</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button mode="contained" BColor={theme.colors.background} textColor={theme.colors.text1} label="explore hall" icon="arrow-down" compact={true} style={[styles.button, { fontFamily: 'LexendBlack', textTransform: 'uppercase', color: theme.colors.text1 }]} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        height: 600,
        justifyContent: 'end',
    },
    bgimage: {
        backgroundPosition: 'relative',
        position: 'relative',
        bottom: 0,
        height: 600,
        padding: 16,
        alignSelf: 'baseline',
        justifySelf: "baseline",
    },
    header: {
        position: 'relative',
        top: 50,
        justifyContent: 'space-between',
        height: 530,
    },
    buttonContainer: {
        alignSelf: 'flex-start',
        fontFamily: 'LexendBlack',
    },
    button: {
        marginRight: 12,
        marginBottom: 12,
    }
});

export default HeroSection;
