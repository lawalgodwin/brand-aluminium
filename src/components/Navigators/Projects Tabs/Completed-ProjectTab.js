import React, { Component } from 'react'
import ImageBrowser from 'react-native-interactive-image-gallery'
import { View,StatusBar } from 'react-native'
import { Header, List, ListItem} from 'react-native-elements'
import axios from 'axios'
import {Content,Container,Text, StyleProvider, Button, Icon } from 'native-base'

const images = [
//    {uri : "https://i.imgur.com/XCRnNWn.jpg", thumbnail : "https://i.imgur.com/XCRnNWn.jpg",id : 'one'},
   {uri : "http://192.168.0.150/bal/uploads/Screenshot%20(1).png", thumbnail : "http://192.168.0.150/bal/uploads/Screenshot%20(1).png",id : 'one', title : 'image one'},
   {uri : "http://192.168.0.150/bal/uploads/Screenshot%20(1).png", thumbnail : "http://192.168.0.150/bal/uploads/Screenshot%20(1).png",id : 'one', title : 'image one'},
   {uri : "http://192.168.0.150/bal/uploads/Screenshot%20(1).png", thumbnail : "http://192.168.0.150/bal/uploads/Screenshot%20(1).png",id : 'one', title : 'image one'},
   {uri : "http://192.168.0.150/bal/uploads/Screenshot%20(1).png", thumbnail : "http://192.168.0.150/bal/uploads/Screenshot%20(1).png",id : 'one', title : 'image one'},
 ]
 class Images extends React.PureComponent<Props> {
  render() {
    const imageURLs: Array<Object> = images.map(
      (img: Object, index: number) => ({
        URI: img.uri,
        thumbnail: img.thumbnail,
        id: String(index),
        title: img.title,
        description: img.description
      })
    )
    return <ImageBrowser images={imageURLs} />
  }
}
export default class CompletedPRoject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dbimages: [],
            completedprojects: [],
            unique_id: '',
            project_id: 0
        }
    }
   async componentDidMount  () {
     var projectid = this.props.navigation.state.params.project_id
     var uniqueId = this.props.navigation.state.params.unique_id
     console.log(this.props)
     console.log(projectid)
      await axios(`http://brandaluminium.com/bal/scripts/API/project_status_update.php?projectid=${this.state.project_id}&unique_id=${this.state.unique_id}`) 
        .then((res) =>{
            console.log(res.data)
            this.setState({completedprojects: res.data})
            }, 
                (err) =>{
                    console.log(err)
                    })
                     .catch(e =>{console.log(e)})
   }
    componentWillMount () {
      this.setState({
          unique_id: this.props.navigation.state.params.unique_id,
          project_id: this.props.navigation.state.params.project_id
      })
    };
    
        render() {
            console.log(this.state.project_id, this.state.unique_id)
            console.log('array', this.state.completedprojects)
        return (
            <Container>
             <StatusBar
                barStyle="light-content"
                backgroundColor="#6a51ae"
                />
                 <Header
                    leftComponent={<Icon name='menu' color='#fff' onPress={() => this.props.navigation.toggleDrawer()} />}
                    centerComponent={{ text: 'Completed Project cards', style: { color: '#fff' } }}
                    rightComponent={<Icon name='home' color="#fff" onPress={() => this.props.navigation.navigate('Home Page')}/>}
                    backgroundColor='red'
                 />
                <Content>
                   <List containerStyle={{marginBottom: 20,}}>
                        {this.state.completedprojects.map((l,i) => (
                                    <ListItem key={i}
                                     title={l}
                                     />
                                ))}
                    </List>
                </Content>
            </Container>
        );
    }
}
