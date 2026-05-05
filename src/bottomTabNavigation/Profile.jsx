import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>PROFILE</Text>
      <Button title='go to screen'  
      onPress={()=>{navigation.navigate('Search')}}></Button>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        fontSize:30,
        fontWeight:'bold'
    }
})