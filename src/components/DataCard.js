import React, {Component, useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {UMBRELLA, DROP, WIND} from '../utils/Constants';

const SCREEN_WIDTH = Dimensions.get('window').width;

const DataCard = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={props.icon} width={120} style={{width: 30, height: 30}} />
      <Text
        style={{
          fontSize: 20,
          marginTop: 8,
          fontWeight: '600',
        }}>
        {props.data}
      </Text>
    </View>
  );
};

export default DataCard;
