import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Animated} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from './Header';
import WeatherCard from './WeatherCard';

function DrawerComponent(props) {
  const scrollX = new Animated.Value(-1000);
  useEffect(() => {
    Animated.spring(scrollX, {
      toValue: 0,
    }).start();
  }, []);
  let data = [
    {
      tempinC: 37,
      city: 'New York',
      type: 'Cloudy',
    },
    {
      tempinC: 42,
      city: 'Tokyo',
      type: 'Sunny',
    },
    {
      tempinC: 12,
      city: 'San Francisco',
      type: 'Snow',
    },
    {
      tempinC: 24,
      city: 'Singapore',
      type: 'Rainy',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header navigation={props.navigation} />

      <Animated.FlatList
        data={data}
        legacyImplementation={false}
        keyExtractor={(item, index) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={item => <WeatherCard celsius item={item} />}
      />
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
          width: 80,
          flexDirection: 'row',
          justifyContent: 'space-evenly',

          alignSelf: 'center',
        }}>
        <TouchableOpacity>
          <Text style={{fontWeight: '700'}}>°C</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>°F</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default DrawerComponent;
