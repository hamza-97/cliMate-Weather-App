import React from 'react';
import {View, Text, Image} from 'react-native';
import {SUNNY, RAIN, CLOUDY, SNOW} from '../utils/Constants';

const WeeklyWeatherCard = props => {
  console.log('props are', props);
  return (
    <View
      style={{
        marginHorizontal: 24,
        paddingVertical: 24,
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row'}}>
        {props.item.item.type === 'Snow' && (
          <Image source={SNOW} width={120} style={{width: 30, height: 30}} />
        )}
        {props.item.item.type === 'Sunny' && (
          <Image source={SUNNY} width={120} style={{width: 30, height: 30}} />
        )}
        {props.item.item.type === 'Cloudy' && (
          <Image source={CLOUDY} width={120} style={{width: 30, height: 30}} />
        )}
        {props.item.item.type === 'Rainy' && (
          <Image source={RAIN} width={120} style={{width: 30, height: 30}} />
        )}

        <View style={{marginLeft: 24}}>
          <Text
            style={{
              fontSize: 18,
              paddingLeft: 12,
              fontWeight: '600',
            }}>
            {props.item.item.day}
          </Text>
          <Text
            style={{
              fontSize: 14,
              paddingLeft: 12,
            }}>
            {props.item.item.date}
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 14,
          }}>
          {props.item.item.temp1} °C
        </Text>
        <Text
          style={{
            fontSize: 14,
          }}>
          {props.item.item.temp2} °C
        </Text>
      </View>
    </View>
  );
};

export default WeeklyWeatherCard;
