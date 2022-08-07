import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOURS} from '../../../database/Database';
import {Button1, InputField} from '../../../database/Styles/Style';
import BackButton from '../../Extras/BackButton';

const Signup = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOURS.white,
        paddingHorizontal: 16,
        paddingVertical: 40,
        position: 'relative',
      }}>
      <View
        style={{
          height: '100%',
          justifyContent: 'space-evenly',
        }}>
        <View>
          <Text
            style={{
              fontSize: 36,
              fontWeight: '600',
              color: COLOURS.black,
              letterSpacing: 1,
            }}>
            Create your{'\n'}account
          </Text>
        </View>
        <View style={{display: 'flex', alignItems: 'center'}}>
          <TextInput placeholder="First name" style={InputField} />
          <TextInput placeholder="Last name" style={InputField} />
          <TextInput
            placeholder="Mobile number"
            style={InputField}
            keyboardType={'numeric'}
          />
          <TextInput
            placeholder="Password"
            style={InputField}
            textContentType="password"
          />
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{...Button1, width: '60%'}}>Next</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: COLOURS.black, fontSize: 16}}>
            Already have an account?
          </Text>
          <Text style={{color: COLOURS.blue}}>Sign into your account</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{position: 'absolute', top: 18}}
        onPress={() => navigation.goBack('Login')}>
        <BackButton />
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
