import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const profile = ({ route }) => {
  const item = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.hadding}> Name: {item.name}</Text>
      <Text style={styles.quality}> Name : {item.pname}</Text>
      <Text style={styles.quality}> RAM : {item.ram}</Text>
      <Text style={styles.quality}> Price : {item.Price}</Text>
     
      <Image style={styles.pic} source={{ uri: item.image }} />
    
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    
    alignItems: 'center',
  },

  hadding: {
    fontSize: 30,
    fontWeight: "600",
  },

  quality: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: "500",
  },

  pic: {
    marginTop: 30,
    height: '80%',
    width: '70%',
    resizeMode:'contain'
    
  },
});
