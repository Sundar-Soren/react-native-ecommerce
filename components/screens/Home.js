import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLOURS, Items} from '../../database/Database';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  useEffect(() => {
    getDataFromDB();
  }, [navigation]);

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let i = 0; i < Items.length; i++) {
      if (Items[i].category == 'product') {
        productList.push(Items[i]);
      } else if (Items[i].category == 'accessory') {
        accessoryList.push(Items[i]);
      }
    }
    setProducts(productList);
    setAccessory(accessoryList);
  };

  const ProductCart = ({data}) => {
    return (
      <TouchableOpacity
        style={{width: '48%'}}
        onPress={() =>
          navigation.navigate('ProductInfo', {productID: data.id})
        }>
        <View
          style={{
            width: '100%',
            height: 100,
            borderRadius: 10,
            backgroundColor: COLOURS.backgroundLight,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          {data.isOff ? (
            <View
              style={{
                position: 'absolute',
                height: '24%',
                width: '20%',
                backgroundColor: COLOURS.green,
                top: 0,
                left: 0,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: COLOURS.white,
                  fontWeight: '400',
                  letterSpacing: 1,
                }}>
                {data.offPercentage}%
              </Text>
            </View>
          ) : null}
          <Image
            source={data.productImage}
            style={{width: '80%', height: '80%', resizeMode: 'contain'}}
          />
        </View>
        <Text style={{fontSize: 12}}>{data.productName}</Text>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome
            name="circle"
            style={
              data.isAvailable ? {color: COLOURS.green} : {color: COLOURS.red}
            }
          />
          {data.isAvailable ? (
            <Text
              style={{marginLeft: 5, color: COLOURS.green, fontWeight: '400'}}>
              Available
            </Text>
          ) : (
            <Text
              style={{marginLeft: 5, color: COLOURS.red, fontWeight: '400'}}>
              Unavailable
            </Text>
          )}
        </View>
        <Text>&#8377; {data.productPrice}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
      }}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
            alignItems: 'center',
          }}>
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
          <Text style={{fontSize: 22, fontWeight: '600', color: COLOURS.black}}>
            Home
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <MaterialCommunityIcons
              name="cart"
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
        <View style={{marginHorizontal: 16, position: 'relative'}}>
          <TextInput
            placeholder="Search..."
            style={{
              marginHorizontal: 7,
              fontSize: 16,
              backgroundColor: COLOURS.backgroundLight,
              paddingHorizontal: 10,
              borderRadius: 10,
              paddingLeft: 42,
            }}
          />
          <FontAwesome
            name="search"
            style={{
              position: 'absolute',
              left: 10,
              top: 4,
              fontSize: 25,
              backgroundColor: COLOURS.backgroundMedium + 6,
              padding: 8,
              borderRadius: 20,
              color: COLOURS.backgroundMedium,
            }}
          />
        </View>
        <View style={{padding: 16, marginBottom: 10}}>
          <Text
            style={{
              fontSize: 26,
              color: COLOURS.black,
              letterSpacing: 1,
              marginBottom: 10,
              fontWeight: '500',
            }}>
            Hi-Fi &amp; Service
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: '400',
              letterSpacing: 1,
              lineHeight: 24,
            }}>
            Audio shop on Bariyada Boram 832112.
            {'\n'}This shop offers both products and services
          </Text>
        </View>
        <View>
          <View
            style={{
              padding: 16,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  marginRight: 5,
                  color: COLOURS.black,
                  fontWeight: '500',
                }}>
                Products
              </Text>
              <Text style={{fontSize: 18, fontWeight: '400'}}>41</Text>
            </View>
            <Text style={{color: COLOURS.blue}}>Show all</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              padding: 16,
            }}>
            {products.map(product => (
              <ProductCart data={product} key={product.id} />
            ))}
          </View>
        </View>
        <View>
          <View
            style={{
              padding: 16,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  marginRight: 5,
                  color: COLOURS.black,
                  fontWeight: '500',
                }}>
                Accessories
              </Text>
              <Text style={{fontSize: 18, fontWeight: '400'}}>24</Text>
            </View>
            <Text style={{color: COLOURS.blue}}>Show all</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              padding: 16,
            }}>
            {accessory.map(product => (
              <ProductCart data={product} key={product.id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
