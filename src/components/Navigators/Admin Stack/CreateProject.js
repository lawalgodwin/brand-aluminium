import React,{ Component } from 'react'
import {Header} from 'react-native-elements';
import {TextInput,View,AsyncStorage} from 'react-native'
var Parse = require('parse/react-native')
import {Item,Body,List,InputGroup,ListItem,Icon, Container,Button, Content,Text, Footer, FooterTab, Input, Form, Label} from 'native-base'

export default class CreateProjects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : '',
            description : '',
            location : '',
            email : '',
        }
        this.createProject = this.createProject.bind(this)
    }
    componentWillMount () {
        Parse.initialize(
            "3sNTOgrySvuT78OeCiXou2BdOmOwSlrCS1BNPybT",
            "2EoZ89qqmodHpWd6TltTXjjRx7UpmnclvKlHaBHn",
            "939a5wxV7vhfsMCZ7llbKj78f3FMnoVEgJjVdWNj"
        );
        Parse.setAsyncStorage(AsyncStorage);
        Parse.serverURL = 'https://parseapi.back4app.com/'
        
        
    }
    createProject() {
            var ProjectClass = Parse.Object.extend('Project')
            var ProjectObject = new ProjectClass()

            ProjectObject.set('Title','my project')
            ProjectObject.set('Description','this is the project description') 
            ProjectObject.set('Location','Lagos,Ikeja') 
            ProjectObject.set("email",'asd@gmail.com')

            ProjectObject.save(null, {
                success : (project) => {
                    console.log(project)
                },
                error : (err) => {
                    console.log(err)
                }
            }) 
    }
    
    render() {
        return (
            <Container>
                <Header
                leftComponent={<Icon name='menu' color='#fff' onPress={() => this.props.navigation.toggleDrawer()} />}
                centerComponent={{ text: 'Kindly Create Project Here', style: { color: '#fff' } }}
                rightComponent={<Icon name='home' color="#fff" onPress={() => this.props.navigation.navigate('Home')}/>}
                backgroundColor='red'
                />
                <Content padder>
                    <List>
                        <ListItem>
                            <Input placeholder='Project Title/Name' returnKeyLabel='next'/>
                        </ListItem>
                        <ListItem>
                            <View>
                            <TextInput placeholder='Project Detail/Description' editable = {true}  textBreakStrategy='balanced' />
                            </View>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                            <Input placeholder='Project Location'/>
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                        <InputGroup>
                          <Input placeholder="Owner's email Address"/>
                          </InputGroup>
                        </ListItem>
                    </List>
                    <Button full style={{marginTop: 25,}} onPress={this.createProject}><Text style={{color : '#fff',}}>Create</Text></Button>
                </Content>
            </Container>
        )
    }
}