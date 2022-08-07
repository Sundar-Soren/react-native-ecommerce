import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Text as TextUI} from '@rneui/themed';
import {COLOURS} from '../../database/Database';

const DrawerContent = props => {
  return (
    <View style={{flex: 1, backgroundColor: COLOURS.backgroundLight}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.container}>
          <View style={styles.profile}>
            <Avatar
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_960_720.jpg',
              }}
              rounded
              size={50}
            />

            <View style={{marginLeft: 10}}>
              <TextUI h4>Sundar Soren</TextUI>
              <Text>@sundar_soren</Text>
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <DrawerItem
              icon={() => <Icon name="home-outline" size={28} />}
              label="Home"
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              icon={() => <Icon name="account-outline" size={28} />}
              label="Profile"
              onPress={() => props.navigation.navigate('Profile')}
            />
            <DrawerItem
              icon={() => <Icon name="cart-check" size={28} />}
              label="My Order"
              onPress={() => {}}
            />
            <DrawerItem
              icon={() => <Ionicons name="settings-outline" size={28} />}
              label="Setting"
              onPress={() => {}}
            />
            <DrawerItem
              icon={() => <Icon name="account-check-outline" size={28} />}
              label="Support"
              onPress={() => {}}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => <Icon name="exit-to-app" size={25} />}
          label="Sign out"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  bottomDrawerSection: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 10,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 13,
  },
  profile_pic: {
    height: 50,
    width: 50,
  },

  container: {
    padding: 13,
    paddingTop: 25,
  },
});
