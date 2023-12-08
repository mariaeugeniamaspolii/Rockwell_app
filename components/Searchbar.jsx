import React from 'react';
import { Searchbar, useTheme } from 'react-native-paper';

const CSearchbar = ({ placeholder, onChangeText, value, ...rest }) => {
    const theme = useTheme();

    return (
        <Searchbar
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            placeholderTextColor={theme.colors.text2}
            iconColor={theme.colors.text2}
            inputStyle={{ color: theme.colors.primary }}
            style={{
                marginTop: 10,
                marginBottom: 24,
                backgroundColor: theme.colors.background2,
                width: '100%',
                justifySelf: 'center',
            }}
        />
    );
};

export default CSearchbar;
