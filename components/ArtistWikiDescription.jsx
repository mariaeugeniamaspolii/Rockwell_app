import React, { useEffect, useState } from "react";
import { Text, useTheme } from "react-native-paper";

const ArtistWikiDescription = ({ array }) => {
    const theme = useTheme();
    const [descriptionText, setDescriptionText] = useState('');

    useEffect(() => {
        fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&titles=${array.name}&prop=extracts&exintro=true`)
            .then(res => res.json())
            .then((data) => {
                const pageId = Object.keys(data.query.pages)[0];
                const extract = data.query.pages[pageId].extract;
                const strippedText = extract.replace(/<[^>]+>/g, '');

                const maxLength = 350;
                let truncatedText = strippedText.slice(0, maxLength);

                truncatedText = truncatedText.trim();

                setDescriptionText(truncatedText + "...");
            })
            .catch(console.error);
    }, [array]);

    return (
        <Text style={{ color: theme.colors.text2, marginVertical: 24 }}>{descriptionText}</Text>
    );
};

export default ArtistWikiDescription;
