import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const AppText = ({ children }) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default AppText;
const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize:30,
    textAlign:'center',
    textDecorationLine:"underline",
  lineHeight:40,

  },
});
