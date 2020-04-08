import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { scaleSize, setSpText } from "../utils/scale.js"

export default class Login extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.temp}></View>
                <Text style={styles.title}>豆瓣账号密码登录</Text>
                {/* 输入框 */}
                <View style={styles.inputWrapper}>
                    <TextInput style={{
                        ...styles.input,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: scaleSize(1)
                    }}
                        placeholder="手机号/邮箱"
                    ></TextInput>
                    <TextInput style={styles.input} placeholder="密码"></TextInput>
                </View>
                {/* 按钮 */}
                <TouchableOpacity>
                    <Text style={styles.loginBtn}>登录</Text>
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: scaleSize(68)
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
        padding: scaleSize(40),
        flex: 1,
    },
    title: {
        fontSize: setSpText(58),
        textAlign: 'center',
        fontWeight: '400'
    },
    inputWrapper: {
        borderColor: '#ccc',
        borderRadius: scaleSize(20),
        borderWidth: scaleSize(1),
        marginBottom: scaleSize(40),
        marginTop: scaleSize(100)
    },
    loginBtn: {
        backgroundColor: '#a1dfab',
        color: '#fff',
        height: scaleSize(88),
        borderRadius: scaleSize(10),
        lineHeight: scaleSize(88),
        textAlign: 'center',
        fontSize: setSpText(32)
    },
    others: {
        fontSize: setSpText(30),
        color: '#29ba4c'
    },
    find: {
        textAlign: 'center',
        color: '#586396',
        fontSize: setSpText(26)
    },
    temp: {
        flexGrow: 1
    }
})