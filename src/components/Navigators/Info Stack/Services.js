import {Content,Text,StyleProvider, Button, List, ListItem,Container } from 'native-base'
import React from 'react'
import {Header,Icon} from 'react-native-elements'
import {StatusBar,Image} from 'react-native'
import { BackHandler } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { NavigationActions } from 'react-navigation';
const BackAction =  NavigationActions.back({ key: 'Services'});

class Services extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
        this.handleBackPress = this.handleBackPress.bind(this);
    }
    static navigationOptions = {
     drawerIcon: ( 
      <Image source={require('../../../ImageAsset/developer-services-icon-21.png')} style={{height:32, width:32}}/>
     )
    }
            componentWillMount() {
                BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
            }

            componentWillUnmount() {
                BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
            }

            handleBackPress() {
               this.props.navigation.goBack(this.props.navigation.state.key);
               return true;
            }
    
   render() { 
    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#6a51a2"
                />
            <Header
        leftComponent={<Icon name="menu" color="#fff" onPress={() => { this.props.navigation.toggleDrawer()}}/>}
        centerComponent={{ text: 'Services', style: { color: '#fff' } }}
        rightComponent={<Icon name='home' color="#fff" onPress={() => this.props.navigation.navigate('Home')}/>}
        backgroundColor='red'/>
        <Content>
            <Button onPress={Actions.contactUs}><Text>contactUs</Text></Button>
        </Content>
        </Container>
    )
   }
}
export default Services;