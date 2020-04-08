import React, { PureComponent } from 'react';
// import {  View, Text } from 'react-native';

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

import Mainindex from "../../components/movies/Mainindex"
import MoiveMainltem from "../../components/movies/moiveMainltem"
import {scaleSize, setSpText} from '../../utils/scale';
export default class Mainindexview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const getloginroutedata=this.props.route.params
    return (
     <>
        <View style={styles.headbackground}>
            <Text style={[styles.middleText, styles.fontSizeText]}>{getloginroutedata.name}</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={this.loginButton}
              style={styles.sourceimg}>
              <Image
                style={{
                  width: scaleSize(40),
                  height: scaleSize(40),
                  marginTop: scaleSize(10),
                }}
                source={require('../../asset/images/icons/ic_search.png')}
              />
              {/* <Text style={[styles.middleText, styles.fontSizeText]}>?</Text> */}
            </TouchableOpacity>
          </View>
          <Mainindex title="影院热映"></Mainindex>
          <Mainindex title="豆瓣热门"></Mainindex>
          <Mainindex title="近期热门剧集"></Mainindex>
        {/* <View>
            <MoiveMainltem></MoiveMainltem>
            <MoiveMainltem></MoiveMainltem>
            <MoiveMainltem></MoiveMainltem>

        </View>   */}
     </>
    );
  }
}
const styles = StyleSheet.create({
  middleText: {
    textAlign: 'center',
  },
  fontSizeText: {
    fontSize: setSpText(40),

    height: scaleSize(100),
    lineHeight: scaleSize(100),
  },
  headbackground: {
    backgroundColor: '#41bd55',
    height: scaleSize(170),
  },
  //搜索框
  sourceimg: {
    height: scaleSize(60),
    // backgroundColor: '#41bd55',
    // padding:scaleSize(0),
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: scaleSize(10),
    borderColor: '#ccc',
    borderWidth: scaleSize(1),
    marginLeft: scaleSize(20),
    marginRight: scaleSize(20),
    lineHeight: scaleSize(60),
    backgroundColor: '#fff',
    // marginTop: scaleSize(100)
  },
  imgcontrol: {},
  //container
  // containerhead: {
  //   fontSize: setSpText(35),
  //   fontWeight: 'bold',
  // },
  // container: {
  //   marginTop: scaleSize(20),
  //   padding: scaleSize(10),
  // },
  // // movieslist
  // titlehead:{
  //   flexDirection:"row",
  //   justifyContent:"space-between"
  // },
  // movieslist: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // movieinfor: {
  //   flexDirection: 'column',
  //   // alignContent:"center",
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // moviesstar: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // },
});
