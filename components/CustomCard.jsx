import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';

const CustomCard = ({ img, title, subtitle, text, description }) => {
    const theme = useTheme();
    const imageUrl = img || 'URL_POR_DEFECTO';

    return (
        <Card style={[styles.card, { backgroundColor: theme.colors.background }]}>
            <Card.Cover source={{ uri: imageUrl }} />
            <Card.Content>
                <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>{title}</Text>
                <Text variant="bodyMedium">{subtitle}</Text>
                <Text variant="bodySmall">{text}</Text>
                <Text variant="bodySmall">{description}</Text>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: '100%',
    },
});

export default CustomCard;
