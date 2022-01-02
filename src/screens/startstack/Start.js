import {observer} from 'mobx-react-lite';
import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Swiper from 'react-native-swiper';
import Header from '../../components/Header';
import DataCard from '../../components/DataCard';
import WeeklyWeatherCard from '../../components/WeeklyWeatherCard';
import {UMBRELLA, DROP, WIND, SNOW} from '../../utils/Constants';

const Start = props => {
  let weeklyData = [
    {
      type: 'Cloudy',
      day: 'Sun',
      date: '21 Jan',
      temp1: 39,
      temp2: 21,
    },
    {
      type: 'Snow',
      day: 'Mon',
      date: '21 Jan',
      temp1: 24,
      temp2: 18,
    },
    {
      type: 'Sunny',
      day: 'Tue',
      date: '22 Jan',
      temp1: 42,
      temp2: 31,
    },
    {
      type: 'Sunny',
      day: 'Wed',
      date: '23 Jan',
      temp1: 42,
      temp2: 31,
    },
    {
      type: 'Snow',
      day: 'Fri',
      date: '24 Jan',
      temp1: 24,
      temp2: 18,
    },
    {
      type: 'Cloudy',
      day: 'Sat',
      date: '25 Jan',
      temp1: 39,
      temp2: 21,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#696969', height: 220}}>
        <Header home navigation={props.navigation} />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 150,
          left: 0,
          right: 0,
        }}>
        <Image
          source={{
            uri: 'https://cdn.britannica.com/82/183382-050-D832EC3A/Detail-head-crown-Statue-of-Liberty-New.jpg',
          }}
          width={120}
          style={{
            width: 120,
            height: 120,
            borderRadius: 200,
          }}
        />
        <Text
          style={{
            fontSize: 32,
            alignSelf: 'center',
            fontWeight: '700',
            marginTop: 20,
          }}>
          New York
        </Text>
      </View>

      <Swiper
        index={0}
        loop={false}
        paginationStyle={{top: -370}}
        activeDot={
          <View
            style={{
              backgroundColor: 'black',
              width: 16,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        dot={
          <View
            style={{
              backgroundColor: 'black',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }>
        <View style={{marginTop: 130}}>
          <Image
            source={SNOW}
            width={120}
            style={{width: 60, height: 60, alignSelf: 'center'}}
          />

          <Text
            style={{
              fontSize: 48,
              alignSelf: 'center',
              fontWeight: '200',
            }}>
            37 °F
          </Text>
          <Text
            style={{
              fontSize: 20,
              alignSelf: 'center',
              marginTop: 8,
            }}>
            Snow Showers
          </Text>
          <View style={{alignSelf: 'center', flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
              }}>
              35°
            </Text>
            <Text
              style={{
                fontSize: 16,
                paddingLeft: 8,
              }}>
              24°
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 24,
              marginTop: 80,
            }}>
            <DataCard icon={UMBRELLA} data="100%" />
            <DataCard icon={DROP} data="77%" />
            <DataCard icon={WIND} data="5 mph" />
          </View>
        </View>

        <FlatList
          data={weeklyData}
          keyExtractor={(item, index) => item.id}
          showsVerticalScrollIndicator={false}
          style={{marginTop: 130}}
          renderItem={item => <WeeklyWeatherCard item={item} />}
        />
      </Swiper>
    </View>
  );
};
export default Start;
