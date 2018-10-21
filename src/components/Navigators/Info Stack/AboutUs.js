import {Content, Text, StyleProvider, Button, Left, ListItem,Container } from 'native-base'
import React from 'react'
import {Icon,Header} from 'react-native-elements'
import {StatusBar,Image} from 'react-native'
class AboutUs extends React.Component {
    constructor (props) {
        super(props)
        this.state ={}
    }
    static navigationOptions = {
     drawerIcon: ( 
      <Image source={require('../../../ImageAsset/aboutus.png')} style={{height:32, width:32}}/>
     )
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
        centerComponent={{ text: 'About Us', style: { color: '#fff' } }}
        //rightComponent={<Icon name='home' color="#fff" onPress={() => this.props.navigation.navigate('Home')}/>}
        backgroundColor='red'
        />
        <Content padder>
          <Text>Established to profer solutions to Engineering constructions</Text>
         </Content>
         </Container>
    )
   }
}
export default AboutUs;