import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
// import { TextInput } from 'react-native/types_generated/index'

const Search = ({navigation}) => {
    const [name,setname]= useState('')
  return (
   <View style={styles.contaner}>
    <Text style={styles.heder}>wellcome to iphone shope</Text>
    <TextInput
    style={styles.searchBar}
    placeholder='enter iphone name'
    value={name}
    onChangeText={(text)=> setname(text)}
 /> 
 <Button title='search' onPress={()=>navigation.navigate('Home', {name})}></Button>
   </View>
  )
}

export default Search;

const styles = StyleSheet.create({
    contaner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:30
    },
    heder:{
        fontSize:30,
        fontWeight:'bold',
    },
    searchBar:{
        borderWidth:2,
        borderRadius:30,
        width:'100%',
        height:40,



    }
})