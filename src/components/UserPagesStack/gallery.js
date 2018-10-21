import React, { Component } from 'react'
import ImageBrowser from 'react-native-interactive-image-gallery'
import { View,StatusBar,Alert } from 'react-native'
import { Header } from 'react-native-elements'
import {Content,Container,Text, StyleProvider, Button, Icon,List, ListItem } from 'native-base'
import axios from 'axios'
    
const defaultimages = [
   {uri : " ", thumbnail : " ",id : 'one'},
 ] 
 class Images extends React.PureComponent<Props> {
  render() {
      var imgs = this.props.imagestatus ? defaultimages : this.props.images
      console.log(this.props.images.length)
     const imageURLs = imgs.map(
      (img, index) => ({
        URI: img.uri,
        thumbnail: img.thumbnail,
        id: String(index)
       })
    )
    return <ImageBrowser images={imageURLs} />
    
  }
}
export default class On_GoingPRoject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dbimages: [],
            projectID: '',
            images : [],
            noimage: false
        }
    }
    
   componentWillMount  () {
    //  console.log(this.props.navigation.state)
     this.setState({
         projectID: this.props.navigation.state.params.project_id
     })
   }
   async componentDidMount  () {
            await axios(`http://brandaluminium.com/bal/scripts/API/Project_images.php?project_id=${this.state.projectID}`)
        .then((res) =>{
             console.log(res.data)
             if(res.data === 'no image'){
            this.setState({noimage: true})}
            else {this.setState({dbimages: res.data})}
            }, 
            (err) => {console.log(err)})
            .catch(err => console.log(err))
           
   }

        render() {
             console.log(`${this.state.projectID} is the project id`)
            {/* console.log(this.state.dbimages) */}
           return (
            <Container>
             <StatusBar
                barStyle="light-content"
                backgroundColor="#6a51ae"
                />
                 <Header
                    leftComponent={<Icon name='menu' color='#fff' onPress={() => this.props.navigation.toggleDrawer()} />}
                    centerComponent={{ text: 'Project cards', style: { color: '#fff' } }}
                    rightComponent={<Icon name='md-arrow-back' color="#fff" onPress={() => this.props.navigation.navigate('Projects')}/>}
                    backgroundColor='red'
                 />
                <Content>
                    <Images images={this.state.dbimages} imagestatus={this.state.noimage}/>
                </Content>
            </Container>
        );
    }
}
