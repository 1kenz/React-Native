import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  FlatList,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import RestaurantCard from '../component/RestorantCard';

const Restaurant = ({route, navigation}) => {
  const {selectedRestaurant} = route.params;

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('ThirdPage')}>
        <View>
          <Image
            source={{uri: selectedRestaurant.photograph}}
            style={{
              height: Dimensions.get('window').height / 3,
            }}
          />
          <Text style={{margin: 10, fontSize: 20, fontWeight: 'bold'}}>
            {selectedRestaurant.name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export {Restaurant};
