import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const Profile = ({navigation ,route}) => {
const {data} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text> 
      <Text>name: {data.name}</Text>
      <Text>FatherName: {data.fatherName}</Text> 
         <Button title='seacrh' onPress={() => navigation.navigate("Search")}></Button>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
   container:{
flex:1,
justifyContent:'center',
alignItems:'center',
gap:20

  },
  text:{
    fontSize:30,
    fontWeight:'600'


  },
})