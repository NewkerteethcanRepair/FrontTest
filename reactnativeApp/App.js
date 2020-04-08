/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import React, {PureComponent} from 'react';
// import {StyleSheet,View, Text} from 'react-native';
// import Login from './src/views/movies/Login';
// import Mainindexview from "./src/views/movies/Mainindexview"
// import Searchview from "./src/views/movies/Searchview"
// import List from "./src/views/movies/List"
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import React from "react"
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet,View, Text} from 'react-native';
import StackNav from "./src/navs/StackNav"
export default function App() {
    return (
        
            <NavigationContainer>
            {/* Rest of your app code */}
            <StackNav/>
            </NavigationContainer>
       
    );
}
// export default function App() {
//   return (
//     <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//   );
// }
// export default class App extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
      
//        <View style={styles.viewapp}> 
//        {/* <Login>

//        </Login> */}
//        {/* <Mainindexview></Mainindexview>  */}
//        <List></List>
//         {/* <Searchview></Searchview>  */}
//        </View>
     
//     );
//   }
// }
// import React from 'react'
// import {Navigation}


// const styles=StyleSheet.create({
//   viewapp:{
//     flex:1
//   }
  
// });

// 可以用 PureComponent rnpc简写

// import React, {PureComponent} from 'react';
// import {StyleSheet,View, Text, Image, TextInput, Button, TouchableOpacity,ScrollView} from 'react-native';

// export default class App extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       // == div
//       <ScrollView>
//         {/* 用text */}
//         {/* //学文本 */}
//         <Text> App </Text>
//         {/* // 本地 */}
//         {/* source={{require:""}} */}
//         <Image
//           // auto
//           resize
//           style={{width: 300, height: 2000}}
//           source={{
//             uri:
//               'http://tiebapic.baidu.com/forum/pic/item/b2065243fbf2b2118726272add8065380cd78e0c.jpg',
//           }}
//         />
//         <Image
//           source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
//           style={{width: 400, height: 400}}
//         />
//         <TextInput></TextInput>
//         <TouchableOpacity>
//           <Text style={styles.btn}>注册</Text>
//         </TouchableOpacity>
//       <View style={styles.viewall}>
//           <View style={[styles.bordertext,styles.viewflex]}>

//           </View>
//           <View style={[styles.bordertext,styles.viewflex]}>

//           </View>
//           <View style={[styles.bordertext,styles.viewflex]}>

//           </View>
//           <View style={[styles.bordertext,styles.viewflex]}>

//           </View>
//       </View>
//         <Button title="login"></Button>

//       </ScrollView>
//     );
//   }
// }
// const styles=StyleSheet.create({
//   //写样式
//   viewall:{
//      flexDirection: 'row',
//      justifyContent: 'center',
//   },
//   btn:{
//     backgroundColor:"orange"
//   },
//   bordertext:{
//     borderRadius:4,
//     borderWidth:1,
//     borderColor:"#ddd"
//   },
//   viewflex:{
//     height:100,
//     width: 100,
//   }

// })

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
