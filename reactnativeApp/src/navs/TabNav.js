import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../views/movies/Login';
import HomeScreen from '../views/movies/Mainindexview';
import ListScreen from '../views/movies/List';
import TopScreen from '../views/movies/Top';
const Tab =createBottomTabNavigator()
export default function TabNav() {
    return (
     <View>
           <Tab.Navigator
           screenOptions={({route})=>{
               return 
           }}
           tabBarOptions={{
               
           }}
           >
    {/* initialParams={name:lisan} */}
           </Tab.Navigator>
           <Tab.screen name="Home" component={HomeScreen}  ></Tab.screen>
           <Tab.screen name="List" component={ListScreen} ></Tab.screen>
           <Tab.screen name="Top"  component={TopScreen} >  </Tab.screen>
     </View>
    )
}
