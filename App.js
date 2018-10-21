/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View,Image} from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import {Header, Container, Content, Footer, FooterTab, Body, Text, Title, Button} from 'native-base'
import SplashScreen from 'react-native-splash-screen';
import HomePage from './src/components/UserPagesStack/Home'
import {createDrawerNavigator,createStackNavigator,DrawerItems} from 'react-navigation'
import Login from './src/components/UserPagesStack/userloginPage'
import {ProjectStack,MoreInfo,Admin} from './src/components/Navigators/navigators'
import { AsyncStorage,YellowBox } from 'react-native';
{/* import firebase from 'react-native-firebase'; */}
{/* import OneSignal from 'react-native-onesignal' */}
var Parse = require('parse/react-native');

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const DrawerMenuCustomised = (props) => (
      <Container>
        <Header style={{height:60, backgroundColor: 'white',}}>
          <Body>
            <Image style={Styles.image}
              source ={require('./src/ImageAsset/logo3.png')}/>
          </Body>
        </Header>
        <Content>
          <DrawerItems {...props}/>
        </Content>
      </Container>
  )    

 const Drawer = createDrawerNavigator(
            {
                'Home Page' : {screen : HomePage},
                Projects : {screen : ProjectStack},
                'More Info..': {screen : MoreInfo},
                // 'Admin Use Only' : {screen : Admin}
            },
            {
                initialRouteName : 'Home Page',
                drawerBackgroundColor : '#fff',
                drawerWidth: 200,
                contentComponent : DrawerMenuCustomised,
                drawerOpenRoute : 'DrawerOpen',
                drawerCloseRoute : 'DrawerOpen',
                drawerToggleRoute : 'DrawerOpen'
            })
  const UserScreens = createStackNavigator(
    {
        
        Login : {screen : Login},
        Home : {screen : Drawer}
    },
    {
        initialRouteName : 'Login',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    })
        class App extends Component<Props> {
          constructor(props) {
            super(props)
            this.state = { }
          }
          
          componentDidMount () {
            SplashScreen.hide();
            {/* firebase.messaging.getToken()
                .then((token) =>{
                  console.warn('Device FCM Token: ', token)
                }).catch(e => console.warn(e)) */}
               {/* console.log(typeof(OneSignal))  */}
          }
          componentWillMount () {
            {/* OneSignal.init('772e25fc-e893-46ee-a8c9-23923791e995')

            OneSignal.addEventListener('received', this.onReceived);
            OneSignal.addEventListener('opened', this.onOpened);
            OneSignal.addEventListener('ids', this.onIds); */}
          }
          
           componentWillUnmount() { }
          render() {
            return (
            <UserScreens/>
            );
          }
        }

        export default App;
      const Styles = StyleSheet.create({
        image :{
          height : 30,
          width : 190
        }
      })
