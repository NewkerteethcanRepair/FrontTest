import React from 'react';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
// import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '../views/movies/Login';
import HomeScreen from '../views/movies/Mainindexview';
import ListScreen from '../views/movies/List';
import detailScreen from '../components/movies/detail';
import { scaleSize, setSpText } from '../utils/scale';
import TabNav from "./TabNav"
import {
    Alert,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button
  } from 'react-native';
const Stack = createStackNavigator();
export default function StackNav() {
  return (
    
    <Stack.Navigator initialRouteName="" screenOptions={{
        headerStyle:{
            height:scaleSize(80),
            borderBottomWidth:0,
            elevation:0,
            HeaderBackground:"#009800"
        },
        headerTitleStyle:{
            fontSize:setSpText(32),
        }
    }}>
    
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'mylogin',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#009800"
            />
          ),
          //处理除了文字和button 的导航框样式所有
          headerStyle:{
              height:scaleSize(100),
              // 去掉边框border
              borderBottomWidth:0,
              elevation:0
          },
          //处理文字和button 的样式
          headerTitleStyle:{
            //   borderBottomWidth:0,
            //   elevation:0
            
          },
        //   处理文字颜色和button颜色等
          // headerTintColor: '#009800'
        }}
        

      />
      <Stack.Screen  name="TabNav"  component={TabNav}/>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'myhome'}}
      />
      <Stack.Screen  name="ListScreen"  component={ListScreen} options={{title:'LIST'}}/>
      <Stack.Screen  name="detail"  component={detailScreen} options={{title:'LIST'}}/>
   
      {/* <Stack.Screen name="" */}
    </Stack.Navigator>
  );

}
