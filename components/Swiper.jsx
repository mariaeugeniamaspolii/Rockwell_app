import { View, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import CustomCard from './CustomCard';

const CustomSwiper = ({ array }) => {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {array.map(({ id, name, cover, year }) => (
                    <View style={styles.container} key={id}>
                        <Link href={`/albums/${id}`} >
                            <CustomCard img={cover} title={name} description={year} text="" subtitle="" />
                        </Link>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 200,
        marginEnd: 16,
        display: "block",
    },
});

export default CustomSwiper;
