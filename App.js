import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LineChart from './Components/LineChart';
import BarChart from './Components/pricing';
import Revenue from './Components/revenu';
import Content from './Components/Content';
import TopExclusivesNetflix from './Components/TopExclusivesNetflix';
import TopExclusivesHBO from './Components/TopExclusivesHBO';
import TopExclusivesAmazon from './Components/TopExclusivesAmazon';
import TopExclusivesDisney from './Components/TopExclusivesDisney';

/**
 * This Dashboard displays graphs using the library react-chart-js2 which only works on a computers web brower.
 * We put all the graphs in components and used text containers for their headings.
 * All graphs can be found in the components file while their position can be changed using the styles
 * in this file.
 * You can also toggle which data is visible in the line graph by clicking the relevant
 * title to hide it (This is when the code is running)
 * 
 * We can extract the headings from the JSON files we created using the MySQL database extension
 */
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Linechart}>
        <Text style={styles.popTitle}>Popularity Rating</Text>
        <LineChart></LineChart>
      </View>
      <View style={styles.revChart}>
        <Text style={styles.revTitle}>Revenue in 2020 (B)</Text>
        <Revenue></Revenue>
      </View>
      <View style={styles.barChart}>
        <Text style={styles.priceTitle}>Price</Text>
        <BarChart></BarChart>
      </View>
      <View style={styles.contentChart}>
        <Text style={styles.contentTitle}>Movie to Series Ratio (%)</Text>
        <Content></Content>
      </View>
      <View>
        <TopExclusivesNetflix></TopExclusivesNetflix>
        <TopExclusivesHBO></TopExclusivesHBO>
      </View>
      <View>
        <TopExclusivesAmazon></TopExclusivesAmazon>
        <TopExclusivesDisney></TopExclusivesDisney>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    top: 20,
  },
  Linechart: {
    width: 450
  },
  popTitle: {
    alignSelf: 'center',
    top: -160
  },
  barChart: {
    width: 450,
  },
  priceTitle: {
    alignSelf: 'center',
    top: -160
  },
  revChart: {
    width: 270,
  },
  revTitle: {
    alignSelf: 'center',
    top: -160
  },
  contentChart: {
    width: 450,
  },
  contentTitle: {
    alignSelf: 'center',
    top: -160
  },
  exclusives: {
    flexDirection: 'row-reverse',


  }
});
