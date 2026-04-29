import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import { TextInput } from 'react-native'
import { useState } from 'react'
const Search = ({navigation}) => {
    const [name,setname] = useState('')
  return (
<View style={Styles.container}>
<Text style={Styles.header}>wellcom user</Text>
<TextInput
style={Styles.searchbar}
placeholder='enter name'
value={name}
onChangeText={(text)=>setname(text)}
/>
<Button title="go to home" onPress={() => navigation.navigate('Home')}></Button>
</View>
 )}

export default Search

const Styles = StyleSheet.create({
   container:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    
    },
    header:{
      fontSize:50,
      fontWeight:'bold'
    },
    searchbar:{
        
     height: 40,
    width:'90%',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom:20
   
},


}
)