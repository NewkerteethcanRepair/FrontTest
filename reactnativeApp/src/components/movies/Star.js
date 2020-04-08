import React, {PureComponent} from 'react';
// import {Text, View} from 'react-native';
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
  import {scaleSize, setSpText} from '../../utils/scale';
export default class Star extends PureComponent {
  render() {
      const {starScore}=this.props;
    //   diplayStar()

      
    return (
      <View>
        <View style={styles.moviesstar}>
          <Image
            style={{width: 15, height: 15}}
            source={require('../../asset/images/icons/rating_star_xsmall_on.png')}></Image>
          <Image
            style={{width: 15, height: 15}}
            source={require('../../asset/images/icons/rating_star_xsmall_on.png')}></Image>
          <Image
            style={{width: 15, height: 15}}
            source={require('../../asset/images/icons/rating_star_xsmall_on.png')}></Image>
          <Image
            style={{width: 15, height: 15}}
            source={require('../../asset/images/icons/rating_star_xsmall_on.png')}></Image>
          <Image
            style={{width: 15, height: 15}}
            source={require('../../asset/images/icons/rating_star_xsmall_on.png')}></Image>
          {/* <Text>7.7</Text> */}
        </View>
      </View>
    );
  }
}
const styles=StyleSheet.create({
    moviesstar: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
})