import React, {useRef, useEffect} from 'react';
import {Image, View, Text, Animated, Dimensions} from 'react-native';

import {SUNNY, RAIN, CLOUDY, SNOW} from '../utils/Constants';
const SCREEN_WIDTH = Dimensions.get('window').width;

const WeatherCard = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scrollX = new Animated.Value(-2000);
  useEffect(() => {
    Animated.spring(scrollX, {
      toValue: 0,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        transform: [
          {
            translateX: scrollX,
          },
        ],
        marginHorizontal: 24,
        paddingVertical: 24,
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '200',
          }}>
          {props.item.item.tempinC}°
        </Text>
        <View style={{paddingLeft: 12}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
            }}>
            {props.item.item.city}
          </Text>
          <Text
            style={{
              fontSize: 14,
            }}>
            {props.item.item.type}
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
          borderRadius: 200,
          padding: 8,
        }}>
        {props.item.item.type === 'Snow' && (
          <Image
            source={SNOW}
            width={120}
            style={{width: 30, height: 30, alignItems: 'center'}}
          />
        )}
        {props.item.item.type === 'Sunny' && (
          <Image
            source={SUNNY}
            width={120}
            style={{width: 30, height: 30, alignItems: 'center'}}
          />
        )}
        {props.item.item.type === 'Cloudy' && (
          <Image
            source={CLOUDY}
            width={120}
            style={{width: 30, height: 30, alignItems: 'center'}}
          />
        )}
        {props.item.item.type === 'Rainy' && (
          <Image
            source={RAIN}
            width={120}
            style={{width: 30, height: 30, alignItems: 'center'}}
          />
        )}
      </View>
    </Animated.View>
  );
};

export default WeatherCard;
