import React, { PureComponent } from 'react'
// import { Text, View,ScrollView } from 'react-native'
import Search from "../../components/movies/Search"
import {
    ScrollView,
    Alert,
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    Button,
    FlatList
  } from 'react-native';
  import {scaleSize, setSpText} from '../../utils/scale';
  import HttpUtils from '../../utils/request';
export default class Searchview extends PureComponent {
    state={
        inputText:"",
        movies:"",
    }
    inputTextControl=(text)=>{
    
        console.log(text);
        HttpUtils.postRequest(gobalurl+"/movies/searchMovies",{
          title:text
      }).then(msg=>{
          console.log(msg.rows);
          
          this.setState({
              movies:msg.rows
          },()=>{
            console.log(this.state.movies);
          })
      })
  
    }
    searchMovies=()=>{
      
    }
    render() {

        return (
            // <View>
            //     <Text> textInComponent </Text>
            // </View>
         <ScrollView>   
           <View style={styles.headbackground}>
          <Text style={[styles.middleText, styles.fontSizeText]}>搜寻</Text>
          <View>
            <TextInput style={styles.sourceimg} placeholder="要找的电影" onChangeText={
                (text)=>{
                    this.inputTextControl("我")
                }
            }></TextInput>
            <TouchableOpacity style={{position: 'absolute', left: 20, top: 10}} 
            >
              <Image
                style={{
                  width: scaleSize(40),
                  height: scaleSize(40),
                  // marginTop: scaleSize(10),
                  // position: 'absolute',
                  // left: 20,
                  // top: 10,
                }}
                source={require('../../asset/images/icons/ic_search.png')}
              />
            </TouchableOpacity>
          </View>
          {/* <Text style={[styles.middleText, styles.fontSizeText]}>?</Text> */}
          {/* </TouchableOpacity> */}
        </View>
        <FlatList
            style={{paddingHorizontal: scaleSize(5)}}
            data={this.state.movies}
            horizontal={false}
            keyExtractor={item => {
              item + ' ';
            }}
            renderItem={({item}) => <Search data={item}>

</Search>}
            showsHorizontalScrollIndicator={false}
          

          />
       
         </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
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
})