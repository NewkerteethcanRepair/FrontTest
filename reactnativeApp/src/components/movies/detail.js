import React, { PureComponent } from 'react'
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
export default class detail extends PureComponent {
    render() {
        return (
            <View>
                <Text> detail页面 </Text>
            </View>
        )
    }
}
