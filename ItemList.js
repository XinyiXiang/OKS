import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  SectionList
} from "react-native";


export default class SectionListBasics extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: "Phone bags",
              data: ["Pink",      "Orange", "Ruby","Pomegranate","Crimson"],
            },
            {
              title: "Handbags",
              data: ["White",  "Coffee brown", "Dark Crimson","Orange","Ruby"]
            },
  {
    title: "Crossbody bag",
    data: ["White"],
  },
]}
renderItem={({item}) => <Text style = {styles.item}>{item}</Text>}
renderSectionHeader={({section})=>(
  <Text style = {styles.sectionHeader}>{section.title}</Text>)}
keyExtractor = {(item,index)=> index}
/>
</View>
);
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 45,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#EB9B34',
  },
});
