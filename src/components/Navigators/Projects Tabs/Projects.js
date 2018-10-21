import React,{Component} from 'react';
import { Text, View, StatusBar,Image,BackHandler } from 'react-native';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import CompletedProjectTab from '../Tabs/Completed-ProjectTab'
import { Header,Icon } from 'react-native-elements'
import { Container,Content } from 'native-base'
import onGoingProjectTab from '../Tabs/On-GoingProjectTab';
import { NavigationActions } from 'react-navigation';
const BackAction =  NavigationActions.back({ key: 'Projects'});

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state ={}
        this.handleBackPress = this.handleBackPress.bind(this);

  }
  
   static navigationOptions = {
     drawerIcon: ( 
      <Image source={require('../../ImageAsset/projects.jpg')} style={{height:32, width:32}}/>
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
    console.log(this.props.navigation)
    return (
      <Container>
          <StatusBar
            barStyle="light-content"
            backgroundColor="purple"
            />
      <Header
        leftComponent={<Icon name="menu" color="#fff" onPress={() => { this.props.navigation.toggleDrawer()}}/>}
        centerComponent={{ text: 'Projects', style: { color: '#fff' } }}
        rightComponent={<Icon name='home' color="#fff" onPress={() => this.props.navigation.navigate('Home')}/>}
        backgroundColor='#6a51a2'/>      
        <Content>

        </Content>
      </Container>
    )
  }
}