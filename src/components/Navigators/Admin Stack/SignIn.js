
import React, { Component } from 'react';
import {Header} from 'react-native-elements'
import { Platform, StyleSheet, AsyncStorage,View,StatusBar, ToastAndroid} from 'react-native';
import { Container, Content,Icon,List,ListItem,InputGroup, Footer, Input,FooterTab, Body, Text, Title, Button} from 'native-base'
// import signIn from '../components/signIn'
import Parse from 'parse/react-native'
// import email from 'react-native-email'
 {/* var email = require('emailjs'); */}


export default class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : ''
        }
        this.signIn = this.signIn.bind(this)
    }

    signIn() {
        Parse.User.logIn(this.state.username, this.state.password, {
            success(data) {
                ToastAndroid.show('Login successful', 5)
                console.log(data)
                this.props.navigation.navigate('CreateProject')
                //send email
                           
            },
            error(data, error) {
                ToastAndroid.show(error.message, 5)
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
                backgroundColor="#6a51ae"
                />
                <Header
                    leftComponent={<Icon name='menu' color='#fff' onPress={() => this.props.navigation.toggleDrawer()} />}
                    centerComponent={{ text: 'My Porfolio', style: { color: '#fff' } }}
                    rightComponent={<Icon name='home' color="#fff" onPress={() => this.props.navigation.navigate('Home')}/>}
                    backgroundColor='red'
              />
                <Content padder>
                    <List>
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
                    </List>
                    <Button onPress={() => { this.props.navigation.navigate('CreateProject')}} style={{marginTop: 20,}} full><Text>submit</Text></Button>
                    <Button onPress={() => {this.props.navigation.navigate('Sign UP')}} style={{marginTop: 20,}} full><Text>Sign Up</Text></Button>
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
