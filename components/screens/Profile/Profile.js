import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar, Text as TextUI} from '@rneui/themed';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Fontisto';
import Topbar from '../../Extras/Topbar';
import {COLOURS} from '../../../database/Database';
import {Heading, Line, Size} from '../../../database/Styles/Style';

const Profile = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: COLOURS.white, padding: 16}}>
      <Topbar heading="Profile" navigation={navigation} />
      <View style={{marginTop: 26}}>
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
        <View style={{...styles.row, marginTop: 16}}>
          <Ionicons
            name="location-outline"
            size={26}
            style={{marginRight: 6, marginLeft: -2, color: COLOURS.blue}}
          />
          <Text style={{fontSize: Size.FontSize}}>Bariyada</Text>
        </View>
        <View style={styles.row}>
          <Ionicons
            name="call-outline"
            size={24}
            style={{marginRight: 6, marginLeft: 2, color: COLOURS.blue}}
          />
          <Text style={{fontSize: Size.FontSize}}>9998887776</Text>
        </View>
        <View style={styles.row}>
          <Icon
            name="email"
            size={21}
            style={{marginRight: 8, marginLeft: 4, color: COLOURS.blue}}
          />
          <Text style={{fontSize: Size.FontSize}}>sudnaf@g.com</Text>
        </View>
        {/* //Address */}
        <View style={{marginTop: 6}}>
          <Text style={Heading}>Delivery Address</Text>
          <View style={Line}></View>
        </View>
        <View
          style={{
            marginTop: 16,
            backgroundColor: COLOURS.backgroundLight,
            padding: 16,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 22, color: COLOURS.black, fontWeight: '600'}}>
            Sundar Soren
          </Text>
          <Text style={{fontSize: 18, color: COLOURS.black}}>
            Dungri kulhi, Joba, Boram, 832105
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    display: 'flex',
    flexDirection: 'row',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
});
