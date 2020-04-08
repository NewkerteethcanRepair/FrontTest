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
  ActivityIndicator,
} from 'react-native';

import Mainindex from '../../components/movies/Mainindex';
// import < from "../../components/movies/Mainindex"
import MoiveMainltem from '../../components/movies/moiveMainltem';
import {scaleSize, setSpText} from '../../utils/scale';

// import React, { PureComponent } from 'react'
// import { Text, View } from 'react-native'
import HttpUtils from '../../utils/request';
export default class List extends PureComponent {
  state = {
    movies: {
      rows: [],
      total: 0,
      start: 0,
      count: 15,
    },
    isRefreshing:false,
    firstLoading:true,
  };
  componentDidMount() {
    this.getdata();
  }
  getdata() {
    HttpUtils.getRequest(gobalurl + '/movies/hot', {
      start: this.state.movies.start,
      count: this.state.movies.count,
    }).then(msg => {
      this.setState({
        movies: {
          ...msg,
          rows: [...this.state.movies.rows, ...msg.rows],
        },
        firstLoading:false,
        // isRefreshing:true
      });
    });
  }
  getMoreMovies = () => {
    this.setState(
      {
        movies: {
          ...this.state.movies,
          start: this.state.movies.start + this.state.movies.count,
        },
      },
      () => {
        this.getdata();
      },
    );
  };
  footerRender = () => {
    const {total, rows} = this.state.movies;
    if (rows.length < total) {
      if(rows.length>0){

        return (
          <View style={{alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text>正在加载数据</Text>
            {/* </ActivityIndicator> */}
          </View>
        );
      }
    } else {
      return (
        <View style={{alignItems: 'center'}}>
          <Text>加载完毕</Text>
        </View>
      );
    }
  };
  render() {
      const {movies,firstLoading}=this.state
    if (firstLoading == false) {
      return (
        <View>
          <FlatList
            style={styles.listWrapper}
            data={this.state.movies.rows}
            numColumns={3}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            onEndReachedThreshold={0.2}
            onEndReached={() => {
              this.getMoreMovies();
            }}
            renderItem={({item}) => <MoiveMainltem data={item} />}
            ListFooterComponent={this.footerRender()}
            onRefresh={()=>{
              this.setState({
                movies:{

                ...movies,
                rows:[],
                start:0,
                }
                
              },()=>{
                this.getdata();
              })
            }}
            refreshing={this.state.isRefreshing}
            
            ></FlatList>
        </View>
      );
    }
    else{
        return (<ActivityIndicator size="large"/>)
    }
  }
}
const styles = StyleSheet.create({
  listWrapper: {
    marginTop: scaleSize(30),
  },
});
