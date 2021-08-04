/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Dimensions } from 'react-native';

export const authStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
  logoText: {
    color: '#0966B2',
    fontSize: 35,
    fontWeight: 'bold',
    paddingTop: 30,
  },
});

export const feedPage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfd8dc',
  },
});
