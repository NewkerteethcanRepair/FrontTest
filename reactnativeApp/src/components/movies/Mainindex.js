import React, {PureComponent} from 'react';
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
  FlatList,
} from 'react-native';
import {scaleSize, setSpText} from '../../utils/scale';
import MoiveMainltem from '../../components/movies/moiveMainltem';
import HttpUtils from '../../utils/request';
export default class Mainindex extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     moviesdata:[]
  //   };
  // }
  state = {
    moviesData: [],
  };
  componentDidMount = () => {
    // this.props.dispatch(getStudentsByPageAsync());
    this.getmoviesData();
    // console.log("state接收后的"+this.state.moviesdata);
  };
  // getlog=()=>{
  //   console.log("state接收后的"+this.state.moviesdata)
  // }
  getmoviesData = () => {
    HttpUtils.getRequest(gobalurl + '/movies/coming').then(msg => {
      console.log(msg.rows);
      this.setState(
        {
          moviesData: msg.rows,
        },
        () => {
          console.log(this.state.moviesData);
        },
      );
    });
  };

  static defaultProps = {
    title: '添加标题',
  };
  render() {
    const {title} = this.props;
    const data=this.state.moviesData
    const navigator=this.props.navigation
    // this.props.navigation.navigate
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.titlehead}>
            <Text style={[styles.containerhead]}>{title}</Text>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text style={{color: '#41bd55', fontSize: setSpText(35)}}>
                查看更多
              </Text>
              <Image
                style={{height: 15, width: 15, marginTop: scaleSize(10)}}
                source={require('../../asset/images/icons/ic_arrow_green_right.png')}></Image>
            </TouchableOpacity>
          </View>
          {/* {moviesdata:[this.state.moviesdata]} */}
          <FlatList
            style={{paddingHorizontal: scaleSize(5)}}
            data={data}
            horizontal={true}
            keyExtractor={item => {
              item + ' ';
            }}
            renderItem={({item}) => <MoiveMainltem data={item}  nav={navigator} />}
            showsHorizontalScrollIndicator={false}
          

          />

          {/* <MoiveMainltem></MoiveMainltem> */}
          {/* <MoiveMainltem></MoiveMainltem>
          <MoiveMainltem></MoiveMainltem> */}
        </View>
      </View>
      //内容
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
  },
  movieinfor: {
    flexDirection: 'column',
    // alignContent:"center",
    alignItems: 'center',
    justifyContent: 'center',
  },
  moviesstar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
