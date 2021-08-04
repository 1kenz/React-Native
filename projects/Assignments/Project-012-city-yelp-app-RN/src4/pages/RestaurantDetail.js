import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';


const RestaurantDetail = (props) => {
  // const restaurantDetail = props.route.params.restaurantDetail;

  return (
    <SafeAreaView>
      {/* <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate('HomePage')}>
        <View>
          <Image
            source={{uri: restaurantDetail.photograph}}
            style={{
              height: Dimensions.get('window').height / 2,
            }}
          />
          <Text style={{margin: 10, fontSize: 20, fontWeight: 'bold'}}>
            {restaurantDetail.name}
          </Text>
          <Text style={{margin: 10}}>{restaurantDetail.address}</Text>
        </View>
      </TouchableWithoutFeedback> */}

      <Text>Restaurant Detail</Text>
    </SafeAreaView>
  );
};

export {RestaurantDetail};
