import React, {PureComponent} from 'react';
// import { Text, View } from 'react-native'
import {
  Alert,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableHighlight,
} from 'react-native';
// import MoiveMainltem from "../../components/movies/moiveMainltem"
import Star from "./Star"
import {scaleSize, setSpText} from '../../utils/scale';
// 必须是函数组件才能用
// import {useNavigation} from "@react-navigation/native"
export default class moiveMainltem extends PureComponent {
  // const navigation=useNavigation()
  state={
    starsScore:"32"
  }
  render() {

    // console.log(" listdata"+this.props.data);
    const everydata=this.props.data
    const navigator=this.props.nav
    return (
      <View>
       <TouchableOpacity activeOpacity={0.9} onPress={()=>{

         
        this.props.nav.navigate("detail")
        //  this.props.navigation.navigate("Home",{name:"zhangsan"});
       }}>
          <View style={styles.movieslist}>
            <View style={styles.movieinfor}>
              <Image
                style={{
                  width: scaleSize(160),
                  height: scaleSize(240),
                }}
                // source={url(everydata.movieImg)}
                // uri not url
                source={{uri:everydata.movieImg}}
              />
              <Text style={{fontWeight: '600',width:scaleSize(160),textAlign:"center"}}
              numberOfLines={1}
              ellipsizeMode="tail"
            
              >{everydata.title}</Text>
                <Star starsScore={everydata.stars}></Star>
            </View>
          </View>
       </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerhead: {
    fontSize: setSpText(35),
    fontWeight: 'bold',
  },
  container: {
    marginTop: scaleSize(20),
    padding: scaleSize(10),
  },
  // movieslist
  titlehead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  movieslist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  movieinfor: {
    flexDirection: 'column',
    // alignContent:"center",
    alignItems: 'center',
    justifyContent: 'center',
  },
  // moviesstar: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // },
});
