import * as React from 'react';
import { ActivityIndicator, useTheme } from 'react-native-paper';

const Loader = () => {
    const theme = useTheme();

    return (
        <ActivityIndicator animating={true} color={theme.colors.primary} style={{ marginTop: 40 }} />
    )
}

export default Loader;