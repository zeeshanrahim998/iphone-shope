
import { StyleSheet, Text, View,Button} from 'react-native'
import React from 'react'


const data =  {
  name:'zeeshan',
 fatherName :'fazalRahim',
};
const Home = ({navigation}) => {

  return (
     <View style={styles.container}>
          <Text style={styles.text}> Home</Text>
             <Button title=' go to profile' onPress={() => navigation.navigate('Profile',{data} )}></Button>
        </View>
        
    )
}

export default Home;

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