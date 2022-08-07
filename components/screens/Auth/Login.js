import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOURS} from '../../../database/Database';
import {Button1, InputField} from '../../../database/Styles/Style';

const Login = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOURS.white,
        paddingHorizontal: 16,
        paddingVertical: 40,
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
            Hey there!
          </Text>
          <Text
            style={{
              fontSize: 16,
              letterSpacing: 0.2,
              color: COLOURS.backgroundDark,
              paddingVertical: 10,
            }}>
            Welcome back, please use your phone {'\n'}number and password to
            login
          </Text>
        </View>
        <View style={{display: 'flex', alignItems: 'center'}}>
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
          <Text
            style={{
              width: '100%',
              textAlign: 'right',
              padding: 5,
              fontSize: 15,
              color: COLOURS.blue,
              fontWeight: '400',
            }}>
            Forgot Password
          </Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
          }}>
          <Text style={{...Button1, width: '60%'}}>Login</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: COLOURS.black, fontSize: 16}}>
            Don't have an account yet?
          </Text>
          <Text
            style={{color: COLOURS.blue}}
            onPress={() => navigation.navigate('Signup')}>
            Create an account
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
