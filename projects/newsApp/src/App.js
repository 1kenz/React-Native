import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import data from './news-data.json';
import NewsCard from './components/NewsCard';

const renderNews = ({ item }) => <NewsCard news={item} />;
const keyExtractor = item => item.id.toString();

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        data={data}
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
