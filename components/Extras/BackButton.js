import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLOURS} from '../../database/Database';

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Entypo
        name="chevron-left"
        style={{
          fontSize: 18,
          color: COLOURS.backgroundMedium,
          padding: 12,
          borderRadius: 10,
          backgroundColor: COLOURS.backgroundLight,
        }}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
