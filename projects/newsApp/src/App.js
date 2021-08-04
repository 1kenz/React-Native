import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import data from './news-data.json';
import NewsCard from './components/NewsCard';

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={data}
        renderItem={({ item }) => <NewsCard news={item} />}
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
