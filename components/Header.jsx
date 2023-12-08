import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useTheme, Icon } from 'react-native-paper';
import { Link } from 'expo-router';

import { RockwellLogoWhite } from '../assets/img';

const Header = () => {
  const theme = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: theme.colors.tertiary }]}>
      <StatusBar
        animated={true}
        barStyle={{ color: theme.colors.text3 }}
      />
      <View style={styles.navBar}>
        <Link href="#">
          <Image source={RockwellLogoWhite} style={styles.logo} />
        </Link>
        <View style={styles.linksContainer}>
          <TouchableOpacity style={styles.link}>
            <Icon
              source="account-outline"
              color={theme.colors.background}
              size={20}
              style={[styles.icon]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Icon
              source="bookmark-outline"
              color={theme.colors.background}
              size={20}
              style={[styles.icon]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 24,
    justifyContent: 'space-between',
    paddingTop: 48,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 32,
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    paddingHorizontal: 10,
    padding: 8,
    borderRadius: 8,
  },
});

export default Header;
