import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  FlatList,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
} from 'react-native';

const Home = (props) => {
  const renderListItem = {({ item }) =>  {
    return (
    <TouchableWithoutFeedback
    onPress={() => {
      props.navigation.navigate('SecondPage', {selectedRestaurant: item})}}
      >
        <View>
          <View style={{margin: 2, padding: 5, alignSelf:"center"}}>
            <Text>{item.neighborhood}</Text>
          </View>
        </View>)
    </TouchableWithoutFeedback>
  }}

  return (
    <SafeAreaView>
      <View style={styles.SearchBar}>
        <TextInput placeholder="Şehir ara..." />
      </View>
      {/* <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={restaurantData}
          renderItem={renderPostData}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderWidth: 1,
                marginVertical: 5,
                borderColor: '#bdbdbd',
              }}>
            </View>)}
      /> */}
    </SafeAreaView>
  );
};

export {Home};

const styles = StyleSheet.create({
  SearchBar: {
    margin: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
