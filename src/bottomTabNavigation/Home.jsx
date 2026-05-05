import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>

      <Button 
      title='go to deatail'
      onPress={()=>navigation.navigate("Deatail")}
      ></Button>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
  
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        fontSize:30,
        fontWeight:"bold"
    }
})