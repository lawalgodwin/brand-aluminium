import {Content,Text,Container} from 'native-base'
import { SocialIcon,Header,Icon} from 'react-native-elements'
import React from 'react'
import {StatusBar,Image} from 'react-native'
import {Row} from '@shoutem/ui'

class Contacts extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    static navigationOptions = {
     drawerIcon: ( 
      <Image source={require('../../../ImageAsset/contactus.png')} style={{height:32, width:32}}/>
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
        centerComponent={{ text: 'Contact', style: { color: '#fff' } }}
        rightComponent={<Icon name='star-half-o' type='font-awesome' color="#fff" onPress={() => this.props.navigation.navigate('Rate')}/>}
        backgroundColor='red'
        />
        <Content padder>
            <Row><Icon
                name='email'
                color='red'
                size ={40} /><Text note>  specklessinnovation@gmail.com</Text></Row>
            <Row><Icon
                name='phone-in-talk'
                color='blue'
                size ={40}
                 />
                <Text note>  +234-8108017222</Text></Row> 
            <Row><SocialIcon
               type='facebook'
            />
            <Text note>  facebook handle</Text></Row>
            <Row><SocialIcon
               type='whatsapp'
               underlayColor='green'
               iconColor='green'
               iconSize={48}
            />
            <Text note>   +234-8108017189</Text></Row>

        </Content>
        </Container>
    )
   }
}
export default Contacts;