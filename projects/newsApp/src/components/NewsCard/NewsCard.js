import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './NewsCard.style';

const NewsCard = ({ image, title, description, author }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
};
export default NewsCard;
