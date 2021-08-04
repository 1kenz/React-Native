/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import moment from 'moment';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

import { feedPage } from './styles';
import { PostItem, PostInput, Header, TopicSelectModal } from '../components';

const user = auth().currentUser;

const Feed = () => {
  const [postList, setPostList] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicModalFlag, setTopicModalFlag] = useState(true);

  const selectingTopic = (value) => {
    database().ref(`/${selectedTopic}/`).off('value');

    setSelectedTopic(value);
    setTopicModalFlag(false);

    database()
      .ref(`${value}`)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        const formattedData = Object.keys(data).map((key) => ({
          ...data[key],
        }));

        formattedData.sort((a, b) => {
          return new Date(b.time) - new Date(a.time);
        });

        setPostList(formattedData);
      });
  };

  const sendingPost = (value) => {
    const postObject = {
      userMail: user.email,
      postText: value,
      time: moment().toISOString(),
    };

    database().ref(`${selectedTopic}`).push(postObject);
  };

  const renderPosts = ({ item }) => <PostItem post={item} />;

  return (
    <SafeAreaView style={feedPage.container}>
      <View style={feedPage.container}>
        <Header
          title={selectedTopic}
          onTopicModalSelect={() => setTopicModalFlag(true)}
          onLogOut={() => auth().signOut()}
        />

        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={postList}
          renderItem={renderPosts}
        />

        <PostInput onSendPost={sendingPost} />

        <TopicSelectModal
          visibility={topicModalFlag}
          onClose={() => (selectedTopic ? setTopicModalFlag(false) : null)}
          onTopicSelect={selectingTopic}
        />
      </View>
    </SafeAreaView>
  );
};

export { Feed };
