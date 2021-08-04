import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: '10',
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    marginTop: 3,
  },
  author: {
    fontStyle: 'italic',
    texAlign: 'right',
  },
  titleContainer: {
    padding: 10,
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerNews: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});
