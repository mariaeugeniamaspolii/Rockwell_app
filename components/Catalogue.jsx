import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { Link } from 'expo-router';

import CustomCard from './CustomCard';
import FeaturedSection from './FeaturedSection';
import DetailInfo from './DetailInfo';

import { brokenRecord } from '../assets/img'

const Catalogue = ({ array }) => {

    const theme = useTheme();

    const bannerInterval = 12;

    if (array.length === 0) {
        return (
            <>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={brokenRecord} />
            </View>
                <Text variant="titleLarge" style={{ fontFamily: 'LexendBold', color: theme.colors.primary, textAlign: 'center'}}>No records found</Text>
                <Text variant="bodyLarge" style={{  textAlign: 'center', marginBottom: 150}}>There're tons of records left to explore!</Text>
            </>
        );
    }

    return (
        <View style={styles.grid}>
            {array.map(({ id, name, cover, year }, index) => {
                const showBanner = (index + 1) % (bannerInterval + 1) === 0;

                return (
                    <React.Fragment key={id}>
                        {showBanner && (
                            <FeaturedSection
                                style={styles.banner}
                                key={`featured-${id}`}
                                bgColor="tertiary"
                                titleColor="text3"
                                marginB={24}
                                cPadding={0}
                                content={
                                    <Link href={`/albums/${id}`}>
                                        <DetailInfo array={array[index]} />
                                    </Link>
                                }
                                customStylesheet={{
                                    width: '100%',
                                    position: 'relative',
                                    left: -16,
                                    width: '109%',
                                }}
                            />
                        )}
                        {!showBanner && (
                            <View style={styles.container} key={`view-${id}`}>
                                <Link href={`/albums/${id}`}>
                                    <CustomCard img={cover} title={name} description={year} text="" subtitle="" />
                                </Link>
                            </View>
                        )}
                    </React.Fragment>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    container: {
        width: '48%',
        display: "grid",
        marginBottom: 16
    },
    banner: {
        marginBottom: 16,
        width: '90%',
    },
    imageContainer: {
        width: '100%',
        justifyContent: 'center', 
        flexWrap: 'wrap',
        display: 'grid',
    },
    image: {
        width: '80%',
        aspectRatio: 1,
        // height: '100%',
        resizeMode: 'contain',
        justifySelf: 'center', 
    },

});

export default Catalogue;
