import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
// import PostCard from '../component/RestorantCard';
import restaurantData from '../restaurant_data.json';
// import productData from "..restaurant_data.json/";

const Home = (props) => {
   
const [searchValue, setSearchValue] = useState("");
const [displayList, setDisplayList] = useState([]);
const renderListItem = ({ item }) =>  {
return (
<TouchableWithoutFeedback onPress={() =>
  props.navigation.navigate('SecondPage', {selectedRestaurant: item})
}>
<View>
  <View style={{margin: 2, padding: 5, alignSelf:"center"}}>
    <Text>{item.neighborhood}</Text>
  </View>
</View>
</TouchableWithoutFeedback>)} />;

useEffect(() => {
  setDisplayList(restaurantData);
}, []);
useEffect(() => {
  const filteredValue = restaurantData.filter((item) => {
    const text = searchValue.toUpperCase();
    const city = item.title.toUpperCase();
    return city.indexOf(text) > -1;
  });
  setDisplayList(filteredValue);
}, [searchValue]);

return (
  <SafeAreaView>
  <View style={styles.searchBar}>
          <TextInput
            placeholder="Ürün ara..."
            onChangeText={(value) => setSearchValue(value)}
          />
  <View>
    <FlatList
      keyExtractor={(_, index) => index.toString()}
      data={restaurantData}
      renderItem={renderPostData}
      ItemSeparatorComponent={() => (
        <View
          style={{
            borderWidth: 1,
            marginVertical: 5,
            borderColor: '#bdbdbd',
          }}
        />
      )}
    />
  </View>
</SafeAreaView>
);
};

export {Home};
