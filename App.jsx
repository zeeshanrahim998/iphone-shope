// import {
//   View,
//   Text,
//   Button,
//   Image,
//   TouchableOpacity,
//   Alert,
//   Pressable,
//   StyleSheet,
// } from 'react-native';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const App = () => {
//   return (
//     <SafeAreaView
//       style={{
//         alignItems: 'center',
//       }}
//     >
//       <Text>my name is zeeshan rahim</Text>
//       <Image
//         source={{
//           uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgy7iU9tREWeM7zZTf0Lou6MwjTTKFqNfEw&s',
//         }}
//         style={{ height: 200, width: 200 }}
//       />
//       <Button title="press me" />
//       <Image
//         source={require('./assets/zee.jpg')}
//         style={{ height: 200, width: 200 }}
//       />
//       <TouchableOpacity
//         style={styles.secondbutten}
//         onPress={() => Alert.alert('thanks')}
//       >
//         <Text>LIKE ME</Text>
//       </TouchableOpacity>
//       <Pressable
//         style={{
//           margin: 10,
//           marginLeft: 50,
//           padding: 10,
//           width: 100,
//           backgroundColor: 'red',
//           alignItems: 'center',
//         }}
//         onPress={() => {}}
//       >
//         <Text>like me</Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// export default App;
// const styles = StyleSheet.create({
//   secondbutten: {
//     margin: 20,
//     marginLeft: 50,
//     padding: 10,
//     width: 100,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     borderRadius: 50,
//     borderWidth: 9,
//     borderColor: 'black',
//     borderBlockEndColor: 'yellow',
//     borderBlockStartColor: '#8888',
//   },
// });

//.........................layout ....flex,flexdirection,flexwrap,aliginItems,justifycontent etc..................

// import { View, Text, StyleSheet } from 'react-native';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const App = () => {
//   return (
//     <SafeAreaView style={[styles.container, { flex: 1 }]}>
//       <View style={styles.box}>
//         <Text>home</Text>
//         <Text>home no 2</Text>
//       </View>
//       <View style={styles.box1}> </View>
//       <View style={styles.box2}> </View>
//       <View style={styles.box3}> </View>
//     </SafeAreaView>
//   );
// };

// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignContent: 'center',
//     gap: '2%',
//   },
//   box: {
//     width: '50%',
//     height: 100,
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent:"center"
//   },
//   box1: {
//     width: '50%',
//     height: 100,
//     backgroundColor: 'red',
//   },
//   box2: {
//     width: '50%',
//     height: 100,
//     backgroundColor: 'yellow',
//   },
//   box3: {
//     width: '50%',
//     height: 100,
//     backgroundColor: '#999',
//   },
// });

//...............................................exersise number 1.............................,,,

// import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
// import React from 'react';

// const App = () => {
//   return (
//     <View style={[{ flex: 1 }]}>
//       <Image
//         source={{
//           uri: 'data:image/jpeg;base64,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',
//         }}
//         style={styles.bgimage}
//         resizeMode="contain"
//       />
//       <Image source={require('./assets/colleg logo.jpg')} style={styles.logo} />
//       <Text style={styles.para1}>gover college</Text>
//       <Pressable style={styles.btn2}>
//         <Text style={styles.btnt}>sing in</Text>
//       </Pressable>
//       <Pressable style={styles.btn}>
//         <Text style={styles.btnt}>log in</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   bgimage: {
//     height: '100%',
//     width: '100%',
//     position: 'relative',
//     flex: 1,
//   },
//   logo: {
//     height: '15%',
//     width: '25%',
//     position: 'absolute',
//     flex: 1,
//     top: '8%',
//     left: '37%',
//   },
//   para1: {
//     position: 'absolute',
//     flex: 1,
//     top: '23%',
//     right: '24%',
//     fontWeight: 'bold',
//     fontSize: 32,
//     fontStyle: 'italic',
//     textTransform: 'capitalize',
//   },
//   btn: {
//     width: '100%',
//     height: 40,
//     position: 'absolute',
//     bottom: 63,
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btn2: {
//     width: '100%',
//     height: 40,
//     position: 'absolute',
//     bottom: 23,
//     backgroundColor: 'green',
//     jstifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnt: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     fontStyle: 'italic',
//     textTransform: 'capitalize',
//     color: 'black',
//   },
// });

//................... ...................Exirsise number 2..................................

// import { View, Image, Text, StyleSheet, Pressable, Alert, RefreshControl } from 'react-native';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <Image source={require('./assets/zee.jpg')} style={styles.bgimage} />     //baground image

//     <Pressable style={styles.btn1} >                         // red button
//           <Image source={require('./assets/cross.png')} style={styles.cross}
//           />
//         </Pressable>

//         <Pressable style={styles.btn2}  >                    //green button
//           <Image source={require('./assets/tek.png')} style={styles.tek}
//           />
//         </Pressable>

//       </View>
//     </SafeAreaView>
//   );
// };
// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     position: 'relative',
//      backgroundColor:'black'
//   },
//   bgimage: {
//     height: '90%',
//     width: '100%',
//     resizeMode: 'cover',

//   },
//   btn1: {                          //red button
//     height: '40',
//     width: '50',
//     backgroundColor: 'red',
//     position: 'absolute',
//     top: 20,
//     right: 40,
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   btn2: {                            //green button
//     height: '40',
//     width: '50',
//     backgroundColor: 'green',
//     position: 'absolute',
//     top: 20,
//     left: 40,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   cross: {                             //cross icon
//     height: '20',
//     width: '20',
//     backgroundColor: 'red',
//   },
//   tek: {                                // tek icon
//     height: 20,
//     width: 20,
//     backgroundColor:"green",
//     border:1,
//     borderRadius:50
//   },
// });

///......................................About shadow .........................................

// import { StyleSheet, View } from 'react-native';
// import React from 'react';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.box}></View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor:'white'
//   },

//   box: {
//     height: 100,
//     width: 100,
//     backgroundColor: 'red',

//     shadowColor: '#000000',                  //this all property is used for ios
//     shadowOffset: { width: 5, height: 5 },     //this all property is used for ios
//     shadowOpacity: 1,                          //this all property is used for ios
//     shadowRadius: 5,                            //this all property is used for ios

//     elevation: 60,                             //this is used for androide
//   },
// });

//................................. about encapsulation ..............................

// import { View, Text } from 'react-native'
// import React from 'react'
// import AppText from './app/component/AppText.js'

// const App = () => {
//   return (
//      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//            <AppText>hi i am  learning   sdkfsdoijg kfdjfud gfndoigj dlkfdsojgld fngdfjgnfdksjhv,nfdgjndf vnjgkjfdnjsdngknsdgjdsfkj </AppText>

//     </View>
//   )
// }

// export default App;

//.................................icones. from  react-native-vector -icone............................

// import { View, Text,StyleSheet } from 'react-native'
// import React from 'react'

// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';     //take icon from websit "react-native-vector-icons"
// import Ionicons from 'react-native-vector-icons/Ionicons'
// const App = () => {
//   return (
//     <View  style={styles.ico}>
//      <FontAwesome5 name="book-open" size={40}  color='black' />
//        <FontAwesome5 name="book-reader" size={80 }  color='black' />
//        <Ionicons name="search-outline" size={40}  color = 'black' />
//     </View>
//   )
// }

// export default App
// const styles=StyleSheet.create({
//   ico:{
//     flex:1,
//      justifyContent:'center',
//      alignItems:'center',
//      gap: 40

//   }
// })

//..................................... about flatlist .............................

// import { View, Text, FlatList } from 'react-native';
// import React from 'react';

// const data = [
//   { id: 1, name: 'zeesha' },
//   { id: 2, name: 'zeesha rahem' },
//   { id: 3, name: 'zeesha khan' },
//   { id: 4, name: 'zeesha ali' },
//   { id: 5, name: 'zeesha khanG' },
//   { id: 6, name: 'zeesha baba' },
//   { id: 7, name: 'zeesha haliq' },
//   { id: 8, name: 'zeesha saqi' },
// ];
// const Screenlist = () => {
//   return (
//     <View>
//       <FlatList
//         data={data}
//         renderItem={({ item }) =>
//           (<Text>{item.name}</Text>)
//         }
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// export default Screenlist;

//.................................OTHER EXAMPLE...............................

// import { View, Text, FlatList } from 'react-native';
// import React from 'react';

// const fruit = [
//   { id: 1, name: 'apple', prices: 200 },
//   { id: 2, name: 'mango', prices: 150 },
//   { id: 3, name: 'melone', prices: 100 },
//   { id: 4, name: 'oreng', prices: 350 },
//   { id: 5, name: 'amrod', prices: 200 },
// ];
// const App = () => {
//   return (
//     <View>
//       <FlatList
//         data={fruit}
//         keyExtractor={(item) => <Text>{item.id.toString()}</Text>}
//         renderItem={({ item }) => <Text>{item.name}  - prices: {item.prices}</Text>}
//       />
//     </View>
//   );
// };
// export default App;

//..........................................first app//  flatlist .............................

// import { View, Text, Image, FlatList } from 'react-native';
// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// const data1 = [
//   { id: 1, name: 'shah faisal', image: require('./app/assets/zee.jpg') },
//   { id: 2, name: 'baber rahim', image: require('./app/assets/zee.jpg') },
//   { id: 3, name: 'shayan rahim', image: require('./app/assets/zee.jpg') },
//   { id: 4, name: 'zeeshan rahim', image: require('./app/assets/zee.jpg') },
//   { id: 5, name: 'shazaib rahim', image: require('./app/assets/zee.jpg') },
//   { id: 6, name: 'muhammand khaliq ', image: require('./app/assets/zee.jpg') },
//   { id: 7, name: ' ali', image: require('./app/assets/zee.jpg') },
//   { id: 8, name: 'arsalan', image: require('./app/assets/zee.jpg') },
//   { id: 9, name: 'hasnan', image: require('./app/assets/zee.jpg') },
//   { id: 10, name: 'adil', image: require('./app/assets/zee.jpg') },
// ];

// const data = [
//   { id: 1, name: 'shah faisal', Image: require('./app/assets/zee.jpg') },
//   { id: 2, name: 'baber rahim', Image: require('./app/assets/zee.jpg') },
//   { id: 3, name: 'shayan rahim', Image: require('./app/assets/zee.jpg') },
//   { id: 4, name: 'zeeshan rahim', Image: require('./app/assets/zee.jpg') },
//   { id: 5, name: 'shazaib rahim', Image: require('./app/assets/zee.jpg') },
//   { id: 6, name: 'muhammand khaliq ', Image: require('./app/assets/zee.jpg') },
//   { id: 7, name: ' ali', Image: require('./app/assets/zee.jpg') },
//   { id: 8, name: 'arsalan', Image: require('./app/assets/zee.jpg') },
//   { id: 9, name: 'hasnan', Image: require('./app/assets/zee.jpg') },
//   { id: 10, name: 'adil', Image: require('./app/assets/zee.jpg') },
// ];

// const App = () => {
//   return (
//     <SafeAreaView style={styles.contaner}>
//       <View style={styles.real}>
//         <FlatList
//           data={data1}
//           horizontal

//           keyExtractor={(item)=>{item.id.toString()}}
//           renderItem={({ item }) => (
//             <View style={{width:100,alignItems:'center'}}>
//               <Image source={item.image} style={styles.realcard} />
//               <Text style={styles.realtext}>{item.name}</Text>
//             </View>
//           )}
//           contentContainerStyle={{ gap: 10 }}
//         />

//       </View>

//       <FlatList
//         contentContainerStyle={styles.screenstyle}
//         data={data}

//         keyExtractor={item => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Image source={item.Image} style={styles.image1} />

//             <Text style={styles.text}>
//               {item.id}: {item.name}{' '}
//             </Text>
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// };

// export default App;
// const styles = StyleSheet.create({
//   contaner: {
//     paddingTop: 10,
//     flex: 1,
//     // justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor:'black'
//   },
//   real: {
//     padding: 5,
//     height: 150,
//     width:"100%",
//     backgroundColor: '#96969399',
//   },
//   realcard: {
//     height: 100,
//     width: 100,
//     borderWidth:2,
//     borderColor:'red',
//     borderRadius: 50,
//   },
//   realtext:{
//    fontWeight:"bold",
//    fontSize:15,
//     numberOfLines:2

//   },
//   image1: {
//     height: '80%',
//     width: '100%',
//   },
//   card: {
//     height: 300,
//     width: 350,
//     backgroundColor: '#96969399',
//     borderWidth: 2,
//     borderColor: 'black',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 30,
//     fontWeight:'bold'
//   },
//   screenstyle: {
//     gap: 20,
//     marginTop:20,
//   },
// });

//.........................................handling user input...............................

// import { View, Text,TextInput,Button } from 'react-native'
// import React from 'react'
// import { useState } from 'react'
// import { StyleSheet } from 'react-native'

// export default function App() {
//   const[name,setName] = useState('');
// const [submited,setsubmited]= useState('')
//   const handelsabmet=()=>{
//     setsubmited(name);
//     setName('')

//   }
//       return (
//     <View style={styles.container}>
//     <Text style={{fontSize:25,fontWeight:'bold', }}>Hello user</Text>
//    <TextInput
//        style={styles.searchbar}
//        placeholder= "Enter your name"
//        secureTextEntry={true}
//        value={name}
//        onChangeText={(Text) => setName(Text)}
//       keyboardType='default'
//    />
//   <Button title='submit' onPress={handelsabmet}></Button>

// {submited ? (<Text>Result : {submited}</Text>) : null}
//     </View>
//   )
// }
// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//      alignItems:'center',
//      gap:10

//   },
//   searchbar:{
//     height:40,
//     width:'90%',
//     borderWidth: 1

//   }
// })

//...................................other ..................................

// import { View, Text, TextInput,Pressable, Alert } from 'react-native';
// import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// // const heandling=()=>{

// // }
// const Gpt = () => {
//   const [question, setquestion] = useState('');
//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.hadding1}>Wellcome User</Text>
//       </View>

//       <View style={styles.dashbord}>
//       <Pressable onPress={() => {console.log('preess me')}}>
//            <View style={styles.icon}>
//           <Ionicons name="send-sharp" size={30} color="white"  />

//        </View>
//         </Pressable>

//         <TextInput
//       placeholder="Ask any question"
//           placeholderTextColor="white"
//           style={{ color: 'white' ,flex:1}}
//           value={question}
//           onChangeText={Text => {
//             setquestion(Text);
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// export default Gpt;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: 'black',
//     color: 'white',
//   },
//   hadding1: {
//     fontWeight: 'bold',
//     fontSize: 40,
//     color: 'white',
//   },
//   dashbord: {
//     // flex: 1,
//     // flexDirection:'row',
//     // alignItems:'center',
//     height: 40,
//     width: '75%',
//     borderWidth: 2,
//     borderRadius: 20,
//     borderColor: 'white',
//     color: 'white',

//     // justifyContent: 'flex-end',
//   },
//   icon: {
//     position:'absolute',
//     right:'10',

//     height: 35,
//     width: 40,
//     backgroundColor: '#4f4f4bfe',
//     justifyContent: 'center',

//     alignItems: 'center',
//     borderRadius: 50,
//   },
// });

//................................. Stak.NAVIGATION  ........................................
//................................. changing of page   .............................

// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './src/screens/Home';
// import Profile from './src/screens/Profile';
// import Search from './src/screens/Search';



// const App = () => {

//   const Stack = createNativeStackNavigator();
  
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Search'> 

//       <Stack.Screen name="Search" component =  {Search} />
//       <Stack.Screen name="Home" component = {Home}/>
//       <Stack.Screen name="Profile" component =  {Profile}  />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});


//...................................  project iphon shop ........................
//.................................exmple of stake navigation...........................


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Search from './src/iphoneshop/search.jsx'
// import Home from './src/iphoneshop/Home.jsx'
// import profile from './src/iphoneshop/profile.jsx'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// const Stack= createNativeStackNavigator();

// const App = () => {

//   return (
    
//     <NavigationContainer>
//      <Stack.Navigator initialRouteName='search'
     
//      screenOptions={{ headerStyle:{backgroundColor:'#438de7e3' },  //appying on all pages
//       headerTintColor:'black',
//       headerShown: true}
//      }>

//       <Stack.Screen 
//       name='search' 
//       component={Search}
//       options={{headerStyle:{backgroundColor:'#438de7e3'},        //style applie on one page
//               headerTintColor:'black',
//               // headerShown: false
//           }} />
//       <Stack.Screen name='Home' component={Home} />
//       <Stack.Screen name='profile' component={profile} />
//      </Stack.Navigator>

//     </NavigationContainer>
    
   
//   )
// }

// export default App

// const styles = StyleSheet.create({})




//..........................................bottom navigation ...............................



// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import Home from './src/bottomTabNavigation/Home.jsx';
// import profile from './src/bottomTabNavigation/Profile.jsx';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Entypo from 'react-native-vector-icons/Entypo'
// import AntDesign from 'react-native-vector-icons/AntDesign'

// const Tab = createBottomTabNavigator();
// const Tabnavigator = ()=>( 
//   <Tab.Navigator 
//   screenOptions={{
//     tabBarActiveBackgroundColor:'tomato', 
//     tabBarInactiveBackgroundColor:'#908e8e52', 
//     tabBarActiveTintColor:'white',
//     tabBarInactiveTintColor:'black',}
//     } >
//     <Tab.Screen name='Home' component= {Home} 
//     options={{
//       tabBarIcon : ({Color,size})=> (
     
//         <Entypo name='home' color={"white"}  size={size}/> 
//      ) 
//     }}/>
//     <Tab.Screen name='profile' component= {profile}
//      options={{
//       tabBarActiveBackgroundColor:'tomato',
//        tabBarInactiveBackgroundColor:'gray',
//         tabBarActiveTintColor:'white',
//       tabBarIcon : ({color,size})=>(
//         <AntDesign  name= 'profile'  color ={color} size={size}  />
//       )
//       }}
//    />

//   </Tab.Navigator>
 
//  )
// const App = () => {
//   return (
//    <NavigationContainer>

//    < Tabnavigator />
//    </NavigationContainer>
//   )
// }

// export default App

// const styles = StyleSheet.create({})


//.................................nisting navigation..................................

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from  './src/bottomTabNavigation/Home'
import profile from  './src/bottomTabNavigation/Profile'
import Search from  './src/bottomTabNavigation/Search'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Deatail from './src/bottomTabNavigation/Deatail'

const Stack = createNativeStackNavigator();
const Stacknavigation = () =>(
 < Stack.Navigator>
  <Stack.Screen    name='HOME'      component={Home} 
  options={{headerShown:false}}/>
  <Stack.Screen name = "Deatail" component={Deatail} />
   <Stack.Screen name = "profile " component={profile} />
 </Stack.Navigator>
)
const Stacknavigation2 = ()=>(
   <Stack.Navigator>
  
   <Stack.Screen 
   name = "profile "
    component={profile}
    options={{headerShown:false}}
    />
 </Stack.Navigator>
)

const Tab= createBottomTabNavigator();
const Tabnavigation = () =>( 
  <Tab.Navigator>

<Tab.Screen   name = 'Home page'      component={Stacknavigation}  />
<Tab.Screen   name = 'Profile'   component={Stacknavigation2} />
<Tab.Screen   name = 'Search'    component={Search} />
 
  </Tab.Navigator>
  )

const App = () => {
  return (
   
 <NavigationContainer>

   <Tabnavigation />
   
    </NavigationContainer> 
  )    
}

export default App

const styles = StyleSheet.create({})