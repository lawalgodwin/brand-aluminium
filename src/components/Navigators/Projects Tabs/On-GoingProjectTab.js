import React, { Component } from 'react'
import { View,StatusBar } from 'react-native'
import ImageBrowser from 'react-native-interactive-image-gallery'
import { Header, ListItem,List } from 'react-native-elements'
import DialogV from "react-native-dialog"
import Dialog from "react-native-dialog";
// import Latest from './Completed-ProjectTab'
import axios from 'axios'
//import OneSignal from 'react-native-onesignal';
import {Content,Container,Text, StyleProvider, Button, Icon} from 'native-base'
const images = [
   {uri : "http://192.168.0.150/bal/uploads/Screenshot%20(1).png", thumbnail : "http://192.168.0.150/bal/uploads/Screenshot%20(1).png",id : 'one'},
   {uri : "https://i.imgur.com/dqQX1K0.jpg", thumbnail : "https://i.imgur.com/dqQX1K0.jpg",id: 'two'},
   {uri : "https://i.imgur.com/nZXbSbh.jpg", thumbnail : "https://i.imgur.com/nZXbSbh.jpg",id: 'two'},
   {uri :  "https://i.imgur.com/mxgtWKt.jpg", thumbnail :  "https://i.imgur.com/mxgtWKt.jpg",id: 'two'},
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
export default class On_GoingPRoject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unique_id: "",
            projects: [],
            isVisible: false,
            proJ_Id: 0,
            accept:false
        }
        this.onProjectClick = this.onProjectClick.bind(this);
        {/* this.showDialog = this.showDialog.bind(this) */}
        this.handlenotsatisfied = this.handlenotsatisfied.bind(this)
        this.handlesatisfied = this.handlesatisfied.bind(this)
    }
    componentWillMount() {
        this.setState({
            unique_id : this.props.navigation.state.params.unique_id
        })

    }
    
    async componentDidMount() {
        await axios(`http://brandaluminium.com/bal/scripts/API/allprojects.php?unique_id=${this.state.unique_id}`)
                .then((res) =>{
                    {/* console.log(res.data.data.projects) */}
                    this.setState({
                        projects : res.data.data.projects,
                        isVisible: false
                    })},
                     (err) => {console.log(err)}).catch(err => console.log(err))
    }
 handlenotsatisfied(){
    this.setState({
        isVisible: false
    })
    this.props.navigation.navigate('Feedback', {dialogVisibilty: true, project_id: this.state.proJ_Id})
}
handlesatisfied(){
    this.setState({
        isVisible: false
    })
    this.props.navigation.navigate('COMPLETED', {project_id: this.state.proJ_Id})
}
    onProjectClick () {
        console.log('project clicked')
        // this.props.navigation.navigate('Gallery',{project_id: })
    }    
        render() {
            console.log(this.state.projects)
        return (
            <Container>
             <StatusBar
                barStyle="light-content"
                backgroundColor="#6a51ae"
                />
                 <Header
                    leftComponent={<Icon name='menu' color='#fff' onPress={() => this.props.navigation.toggleDrawer()} />}
                    centerComponent={{ text: 'My Projects', style: { color: '#fff' } }}
                    rightComponent={<Icon name='home' color="#fff" onPress={() => this.props.navigation.navigate('Home Page')}/>}
                    backgroundColor='red'
                 />
                <Content>
                    <List containerStyle={{marginBottom: 20,}}>
                        {this.state.projects.map((l,i) => (
                                    <ListItem key={i}
                                     title={l[1]}
                                     subtitle={
                                         <View>
                                         <Button transparent info onPress={() => {
                                             this.setState({
                                                 proJ_Id: l[0],
                                                 isVisible: true
                                             })
                                         }} 
                                             style={{flexDirection: 'row',paddingLeft: 5, paddingTop: 5,}}>
                                            <Text>mark as completed</Text>
                                          </Button>
                                         </View>
                                     } 
                                     onPress={() => {
                                         console.log('project clicked')
                                         this.props.navigation.navigate('Gallery',{project_id: l[0]})
                                         }}/>
                                ))}
                    </List>
                     <Dialog.Container  visible={this.state.isVisible}>
                    <Dialog.Title>Give your remarks</Dialog.Title>
                    <Dialog.Description>
                        Project Completed
                    </Dialog.Description>
                    <Dialog.Button label="Accept" onPress={() => {
                            this.setState({
                                isVisible: false,
                                })
                                this.props.navigation.navigate('COMPLETED', {project_id: this.state.proJ_Id})
                            }} />
                    <Dialog.Button label="Not Completed" onPress={this.handlenotsatisfied} />
                </Dialog.Container>
                </Content>
            </Container>
        );
    }
}
