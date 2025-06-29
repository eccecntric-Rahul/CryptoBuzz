import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import TitleHeader from '../navigation/header/TitleHeader';

const NewsDetailScreen = (props:any) => {
  const { slug ,id} = props.route.params.item;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TitleHeader title='News Detail' />
        <WebView
          source={{ uri: `https://cryptopanic.com/news/${id}/${slug}/` }}
          style={styles.webview}
          startInLoadingState={true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default NewsDetailScreen;
