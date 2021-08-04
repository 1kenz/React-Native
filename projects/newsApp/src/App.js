import React from 'react';
import { Image, View, FlatList, StyleSheet, ScrollView } from 'react-native';
import news_data from './news_data.json';
import banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';

const renderNews = ({ item }) => <NewsCard news={item} />;
const keyExtractor = item => item.id.toString();

const App = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.headerText}>News</Text>
      <FlatList
      ListHeaderComponent={() =>  (
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        >
          {banner_data.map(bannerNews => (
            <Image 
            style={styles.banner_image}}
            source={{ uri: bannerNews.imageUrl }} />
          ))}
        </ScrollView>)}
        keyExtractor={keyExtractor}
        data={news_data}
        renderItem={renderNews}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
});
