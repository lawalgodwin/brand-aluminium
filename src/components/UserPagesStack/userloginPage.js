import React from 'react'
import * as Progress from 'react-native-progress'
import {Item,Body,List,InputGroup,ListItem,Icon, Container,Button, Content, Footer, FooterTab, Input, Form, Label} from 'native-base'
import {Header } from 'react-native-elements'
import { View,StyleSheet,Text,StatusBar,Alert,NetInfo,ToastAndroid } from 'react-native'
import axios from 'axios';
import Loading from 'react-native-whc-loading'
export default class UserLogin extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            password : "",
            isConnected: true
        }
        this.onloginPress = this.onloginPress.bind(this)
    }

     onloginPress() {
        const nav =  this.props.navigation
        const state = this.state
        NetInfo.isConnected.fetch().done((isConnected) => {
            if ( isConnected )
            {
                // Run your API call
                axios.get(`http://brandaluminium.com/bal/scripts/API/mobile_app_signin.php?unique_id=${this.state.password}`)
                    .then(function (response) {
                        console.log(response);
                        if(response.data === 'Login Success!'){
                            setTimeout(() => {return(<Progress.Circle size={30} indeterminate={true} />)
                            }, 5000)
                            nav.navigate('Home',{unique_id: state.password})
                            ToastAndroid.show(response.data, 5)

                        }
                        else{ToastAndroid.show(response.data, 5)}
                    })
                    .catch(function (error) {
                        console.log(error);
                            ToastAndroid.show("Network Error", 7)
                    });
            }
            else
            {
                // Ideally load from local storage
                Alert.alert("No Internet Access")
            }
        });

     }
    componentDidMount() {
        
    }
    render() {
        return(
            <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#6a51ae"
                />
             <Header
                // leftComponent={<Icon name='menu' color='#fff' onPress={() => this.props.navigation.toggleDrawer()} />}
                centerComponent={{ text: 'Access your Project', style: { color: '#fff' } }}
                // rightComponent={<Icon name='home' color="#fff" onPress={() => this.props.navigation.navigate('Home')}/>}
                backgroundColor='red'
                />
            <Content padder>
            <List>
          <ListItem>
            <InputGroup>
                <Icon name="ios-lock"/>
                <Input placeholder='Please Enter your Unique ID' secureTextEntry={true}
                onChangeText={(password) => {this.setState({password})}}
                value={this.state.password}/>
            </InputGroup>
          </ListItem>
        </List>
          <Button  style={{marginTop: 20}} full onPress={this.onloginPress/*console.log(this.refs)*/}>
            <Text style={{fontSize : 20,color:'#fff'}}>click to access your Project</Text>
          </Button>
                {/*<Loading show={true} onRequestClose/>*/}
            </Content>
        </Container>
        );
    }
}