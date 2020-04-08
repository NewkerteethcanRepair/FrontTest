import React, {PureComponent} from 'react';
import {
  Alert,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {scaleSize, setSpText} from '../../utils/scale';
import HttpUtils from '../../utils/request';

export default class Login extends PureComponent {
  state = {
    username: '',
    password: '',
  };
  loginButton = () => {
    HttpUtils.postRequest(gobalurl + '/users/login', {
      username: this.state.username,
      password: this.state.password,
    }).then(msg => {
      console.log(msg);
      // 页面跳转
      // push  会添加记录   navigate 自己跳转自己不会参数历史记录  goBack
      // 配置到了导航里的话 有一个属性           传参 
      this.props.navigation.navigate("Home",{name:"zhangsan"});
      // 在home 接收参数用
      // this.props.route.params
      // 默认值
      // 再 Stacknavs   用 initialParams ={"name","xx"} 默认 

    });
    // Alert.alert('You tapped the button!')
    // this.props.history.push('/child02')
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.temp}></View>
        <Text style={styles.title}>豆瓣账号密码登录</Text>
        {/* 输入框 */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={{
              ...styles.input,
              borderBottomColor: '#ccc',
              borderBottomWidth: scaleSize(1),
            }}
            onChangeText={text => {
              console.log(text);
              this.setState({
                username: text,
              });
            }}
            placeholder="手机号/邮箱"></TextInput>
          <TextInput
            style={styles.input}
            onChangeText={text => {
              console.log(text);
              this.setState({
                password: text,
              });
            }}
            secureTextEntry={true}
            placeholder="密码"></TextInput>
        </View>
        {/* 按钮 */}
        <TouchableOpacity onPress={this.loginButton}>
          <Text style={styles.loginBtn}>登录</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: scaleSize(68),
          }}>
          <Text style={styles.others}>短信验证登录/注册</Text>
          <Text style={styles.others}>海外手机密码登录</Text>
        </View>
        <View style={styles.temp}></View>
        <Text style={styles.find}>忘记密码？找回密码</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: scaleSize(50),
    flex: 1,
  },
  title: {
    fontSize: setSpText(58),
    textAlign: 'center',
    fontWeight: '400',
  },
  input: {
    // width:scaleSize(400),
    // height:scaleSize(400)
  },
  inputWrapper: {
    borderColor: '#ccc',
    borderRadius: scaleSize(20),
    borderWidth: scaleSize(1),
    marginBottom: scaleSize(40),
    marginTop: scaleSize(100),
  },
  loginBtn: {
    backgroundColor: '#a1dfab',
    color: '#fff',
    height: scaleSize(88),
    borderRadius: scaleSize(10),
    lineHeight: scaleSize(88),
    textAlign: 'center',
    fontSize: setSpText(32),
  },
  others: {
    fontSize: setSpText(30),
    color: '#29ba4c',
  },
  find: {
    textAlign: 'center',
    color: '#586396',
    fontSize: setSpText(26),
  },
  temp: {
    // flexGrow: 1
    flexGrow: 1,
  },
});
