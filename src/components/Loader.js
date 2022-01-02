import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loader = ({style}) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#fff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});

export default Loader;
