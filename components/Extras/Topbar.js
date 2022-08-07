import {View, Text, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLOURS} from '../../database/Database';
import {Button1} from '../../database/Styles/Style';
import BackButton from './BackButton';

const Topbar = ({heading, menu, navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {menu ? (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather
            name="menu"
            style={{
              fontSize: 18,
              color: COLOURS.backgroundMedium,
              padding: 12,
              borderRadius: 10,
              backgroundColor: COLOURS.backgroundLight,
            }}
          />
        </TouchableOpacity>
      ) : (
        <BackButton navigation={navigation} />
      )}
      <Text style={{fontSize: 22, fontWeight: '600', color: COLOURS.black}}>
        {heading}
      </Text>
      <TouchableOpacity>
        <FontAwesome
          name="pencil"
          style={{
            fontSize: 18,
            color: COLOURS.backgroundMedium,
            padding: 12,
            borderRadius: 10,
            backgroundColor: COLOURS.backgroundLight,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Topbar;
