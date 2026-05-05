import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Deatail = () => {
  return (
    <View style={styles.container}>
      <Text> its a deatail screen</Text>
    </View>
  )
}

export default Deatail

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})