import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

const FeaturedSection = ({ title, content, bgColor, titleColor, cPadding = 24, marginB = 0, customStylesheet }) => {
    const theme = useTheme();
    const bgSelectedColor = bgColor ? theme.colors[bgColor] : theme.colors.background2;
    const txSelectedColor = titleColor ? theme.colors[titleColor] : theme.colors.text1;

    const styles = StyleSheet.create({
        container: {
            ...customStylesheet,
            backgroundColor: bgSelectedColor,
            padding: cPadding,
            marginBottom: marginB
        },
    });

    return (
        <View style={styles.container}>
            <Text variant='headlineSmall' style={{ color: txSelectedColor, textTransform: 'uppercase', fontFamily: 'LexendBold', marginBottom: 16 }}>{title}</Text>
            {content}
        </View>
    );
};

export default FeaturedSection;
