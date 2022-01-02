import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../utils/Colors';
const SCREEN_WIDTH = Dimensions.get('window').width;

const Header = props => {
  return (
    <View
      style={{
        marginHorizontal: 24,
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'space-between',
        marginTop: props.home && 40,
      }}>
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Ionicons
          name="ios-menu"
          size={20}
          color={props.home ? Colors.primary.white : Colors.primary.black}
        />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          color: props.home ? Colors.primary.white : Colors.primary.black,
        }}>
        cliMate
      </Text>
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Ionicons
          name="ios-search"
          size={20}
          color={props.home ? Colors.primary.white : Colors.primary.black}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
