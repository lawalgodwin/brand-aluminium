
import React, { Component } from 'react';
import {Header} from 'react-native-elements'
import { Platform, StyleSheet, AsyncStorage,View,StatusBar, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import { Container, Content,Icon,List,ListItem,InputGroup, Footer,Input,FooterTab, Body, Text, Title, Button} from 'native-base'
// var randomstring = require("randomstring");
var Parse = require('parse/react-native')
import axios from 'axios'
{/* var nodemailer = require('nodemailer'); */}
const ID_LENGTH = 6


export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.userID = Math.random().toString(36).slice(2)
        this.state = {
            name: '',
            email: '',
            username : '',
            password : '',
            confpass :''
        }
        this.signUp = this.signUp.bind(this)
    }

    signUp() {
        var user = new Parse.User()
        user.set('name', this.state.name)
        user.set('email', this.state.email)
        user.set('username', this.state.username)
        user.set('password', this.state.password)
        user.set('confirm password', this.state.confpass)
        user.set('special_id', this.userID)
        // ToastAndroid.show(
        //     `Name: ${this.state.name}, Email: ${this.state.email}, Username: ${this.state.username}, Password: ${this.state.password}`,
        //     ToastAndroid.SHORT
        // )
        var inputedEmail = this.state.email;
        // var uniqueKey = randomstring.generate(7)
        ToastAndroid.show(('Email:'+ inputedEmail),4)
        user.signUp(null, {
            success(data) {
                ToastAndroid.show(`User created successfully!`, 5)
                console.log(data)
               
                 return axios.get('https://obscure-hamlet-91775.herokuapp.com:5000/send',{
                        params: {
                        email: inputedEmail,
                        }}).then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            error(data, error) {
                // ToastAndroid.show(error.message, 5)
                console.log(error)
            }
        })
    }
    
    componentWillMount () {
        Parse.initialize(
            "3sNTOgrySvuT78OeCiXou2BdOmOwSlrCS1BNPybT",
            "2EoZ89qqmodHpWd6TltTXjjRx7UpmnclvKlHaBHn"
        );
        Parse.setAsyncStorage(AsyncStorage);
        Parse.serverURL = 'https://parseapi.back4app.com/'
        
        
    }

    render () {  
        return(
            <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#6a51a2"
                />
                <Header
                    leftComponent={<Icon name='menu' color='#fff' onPress={() => this.props.navigation.toggleDrawer()} />}
                    centerComponent={{ text: 'My Porfolio', style: { color: '#fff' } }}
                    rightComponent={<Icon name='home' color="#fff" onPress={() => this.props.navigation.navigate('Home')}/>}
                    backgroundColor='red'
                />
                <Content padder>
                    <KeyboardAvoidingView enabled keyboardVerticalOffset={2}>
                    <List>
                        <ListItem>
                            <InputGroup>
                                <Icon name ="ios-person"/>
                                <Input placeholder='Name'
                                onChangeText = {(name) => {this.setState({ name })}}
                                value={this.state.name}/>
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name ="ios-person"/>
                                <Input placeholder='Email Address'
                                onChangeText = {(email) => {this.setState({ email })}}
                                value={this.state.email}/>
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name ="ios-person"/>
                                <Input placeholder='Username'
                                onChangeText = {(username) => {this.setState({ username })}}
                                value={this.state.username}/>
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-lock"/>
                                <Input placeholder='Password' secureTextEntry={true}
                                onChangeText={(password) => {this.setState({password})}}
                                value={this.state.password}/>
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-lock"/>
                                <Input placeholder='Confirm Password' secureTextEntry={true}
                                onChangeText={(confpass) => {this.setState({confpass})}}
                                value={this.state.confpass}/>
                            </InputGroup>
                        </ListItem>
                    </List>
                   </KeyboardAvoidingView>
                    <Button onPress={this.signUp} full style={{marginTop: 20,}}><Text>submit</Text></Button>
                </Content>           
            </Container>
            
        );
   }
  
}
const styles = StyleSheet.create({
    Button : {
        flex: 1,
        backgroundColor: 'teal',
        borderRadius: 10,
        marginLeft: 17,
        marginTop: 15,
        alignSelf: 'center',
        justifyContent: 'center',
    }
})
