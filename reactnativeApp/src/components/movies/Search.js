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
  Button,
} from 'react-native';
import {scaleSize, setSpText} from '../../utils/scale';
export default class Search extends PureComponent {
  render() {
    const movies = this.props.data;
    return (
      <View>
        {/* container */}
        <View style={styles.searchlist}>
          <View style={styles.searchlistinfor}>
            <TouchableOpacity style={styles.searcheverylistall}>
              <Image
                style={{
                  width: scaleSize(180),
                  height: scaleSize(240),
                }}
                source={{uri: movies.movieImg}}></Image>
              <View style={styles.searchlistdeatil}>
                <Text style={styles.searchHead}>{movies.title}</Text>
                {/* <Text style={style.searchHead}>复仇者联盟</Text> */}
                <View style={styles.moviesstar}>
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../../asset/images/icons/rating_star_xsmall_on.png')}></Image>
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../../asset/images/icons/rating_star_xsmall_on.png')}></Image>
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../../asset/images/icons/rating_star_xsmall_on.png')}></Image>
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../../asset/images/icons/rating_star_xsmall_on.png')}></Image>
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../../asset/images/icons/rating_star_xsmall_on.png')}></Image>
                  <Text>{movies.average}</Text>
                </View>
                <Text
                  style={styles.searchnote}
                  numberOfLines={3}
                  ellipsizeMode="tail">
                  {movies.casts}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    height: scaleSize(180),
  },
  //搜索框
  sourceimg: {
    height: scaleSize(70),
    // backgroundColor: '#41bd55',
    paddingLeft: scaleSize(60),
    fontSize: setSpText(30),
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
  //container
  searchlist: {
    padding: scaleSize(30),
    borderBottomWidth: scaleSize(1),
    borderColor: '#CCC',
    marginHorizontal: scaleSize(0),
    marginVertical: scaleSize(0),
  },
  searcheverylistall: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  moviesstar: {
    flexDirection: 'row',
    // justifyContent:"center"
  },
  searchHead: {
    fontSize: setSpText(40),
  },
  searchnote: {
    fontSize: setSpText(30),
    paddingRight: scaleSize(170),
    marginTop: scaleSize(0),
  },
});
