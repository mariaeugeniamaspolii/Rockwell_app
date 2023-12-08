import React from 'react';
import { Button } from 'react-native-paper';

const CButton = ({ label, icon="", BColor="transparent", textColor="#fff", mode="contained", onPress, compact=true, style }) => {

    return (
        <Button style={[style, {padding: 4}]}
            icon={icon}
            mode={mode}
            onPress={onPress}
            buttonColor={BColor}
            textColor={ textColor }
            compact={compact}
        >
            {label}
        </Button>
    );
}

export default CButton;
