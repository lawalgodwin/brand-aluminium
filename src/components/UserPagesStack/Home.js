import React, { Component } from 'react';
import {Text,Container,Footer, FooterTab,Button,Content} from 'native-base';
import {Header, Icon} from 'react-native-elements'
import {StatusBar,Image} from 'react-native'
// import {Actions,Router, Scene} from 'react-native-router-flux';
import axios from 'axios'

import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  BackHandler,
  Modal
} from 'react-native';
import ImageElement from '../../ImageAsset/ImageElement';

export default class HOME extends Component<Props> {
    constructor (props) {
        super(props)
        this.state = {
            modalVisible: false,
            modalImage: require('../../ImageAsset/fruit-fast-action-studio-73000.jpeg'),
            images: [
                {uri: 'https://facebook.github.io/react/logo-og.png'},
                {uri: 'https://facebook.github.io/react/logo-og.png'},
                {uri: 'https://facebook.github.io/react/logo-og.png'},
                {uri: 'https://facebook.github.io/react/logo-og.png'},
                {uri: 'https://facebook.github.io/react/logo-og.png'},
                ],
            unique_id : ""
        }
      }
            
    setModalVisible(visible, imageKey) {
        this.setState({ modalImage: this.state.images[imageKey] });
        this.setState({ modalVisible: visible });
    }

    getImage() {
       return this.state.modalIamge;
    }
    static navigationOptions = {
     drawerIcon: (
      <Image source={require('../../ImageAsset/home.png')} style={{height:32, width:32}}/>
     )
    }
    
    async componentDidMount() {
        console.log(this.props.navigation.state.params.unique_id)
        console.log(this.state.images)
        this.setState({
            unique_id : this.props.navigation.state.params.unique_id
        })
        await axios(`http://brandaluminium.com/bal/scripts/API/app_home_images.php`)
                .then((res, err) => {
                    if(!err && res){
                        this.setState({images : res.data})
                        console.log(this.state.images)
                    }
                    else console.log(err)
                })
                .catch(e => console.log(e)) 

    }
    

    render() {
        console.log(this.state.unique_id)
        const {goBack} = this.props.navigation
        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback key={key} 
                        onPress={() => { this.setModalVisible(true, key)}}> 
                        <View style={styles.imagewrap}>
                            <ImageElement imgsource={val}></ImageElement>
                        </View>
                    </TouchableWithoutFeedback>

        });

        return (
            <Container>
             <StatusBar
                barStyle="light-content"
                backgroundColor="#6a51a2"
                />
                <Header
                    leftComponent={<Icon name='apps' color='#fff' onPress={() => this.props.navigation.toggleDrawer()} />}
                    centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                    rightComponent={ <Icon name="open-in-browser" color='#fff' onPress={ () => goBack(null) } />}
                    backgroundColor='#6a51a2'
                />
                <Content>

                 <Modal style={styles.modal} animationType={'fade'}
                        transparent={true} visible={this.state.modalVisible}
                        onRequestClose={() => {}}>

                        <View style={styles.modal}>
                            <Text style={styles.text}
                                onPress={() => {this.setModalVisible(false)}}>Close</Text>
                             <ImageElement imgsource={this.state.modalImage}></ImageElement>
                        </View>

                 </Modal>

                 {images}
                 </Content>
                 <Footer>
                      <FooterTab style={{backgroundColor: '#6a51a2'}}>
                        <Button vertical onPress={() => this.props.navigation.navigate('Projects',{unique_id: this.state.unique_id})}>
                          <Icon name="camera" />
                          <Text>Projects</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('Projects', {unique_id: this.state.unique_id})}>
                          <Icon name="person" />
                          <Text>Feedback</Text>
                        </Button>
                      </FooterTab>
                    </Footer>
                    </Container>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#eee',
        // For iOS status bar, we need a marginTop of 20.
        marginTop: 20,
    },
    imagewrap: {
        margin: 2,
        padding: 2,
        height: (Dimensions.get('window').height/3) - 12,
        width: null,
        backgroundColor: '#fff',
    }, 
    modal: {
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0,0,0, 0.9)'
    },
    text: { 
       color: '#fff',
    }

});
