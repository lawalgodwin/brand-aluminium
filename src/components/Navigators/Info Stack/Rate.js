import React from 'react';
import {Rating,Header,Icon} from 'react-native-elements';
import {Content,Container} from 'native-base'
import { StatusBar,Image } from 'react-native'

class Rate extends React.Component{
    constructor (props) {
        super(props)
        this.state ={}
    }
    static navigationOptions = {
     drawerIcon: ( 
      <Image source={require('../../../ImageAsset/ratings.png')} style={{height:40, width:40}}/>
     )
    }
   render() { 
    return (
    <Container>
      <StatusBar
                barStyle="light-content"
                backgroundColor="#6a51ae"
                />
        <Header
        leftComponent={<Icon name="menu" color="#fff" onPress={() => { this.props.navigation.toggleDrawer()}}/>}
        centerComponent={{ text: 'Rate', style: { color: '#fff' } }}
        rightComponent={<Icon name='info' color="#fff" onPress={() => this.props.navigation.navigate('About Us')}/>}
        backgroundColor='red'/>
       <Content>     
            <Rating
                    showRating
                    type="star"
                    fractions={1}
                    startingValue={3.6}
                    readonly
                    imageSize={40}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10 }}
                    />
        </Content>
    </Container>
    )
   } 
}
export default Rate;