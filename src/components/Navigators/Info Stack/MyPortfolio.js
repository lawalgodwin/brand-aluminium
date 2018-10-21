import {Content,Container,Text, StyleProvider, Button, List, ListItem } from 'native-base'
import React from 'react'
import {StatusBar,Image,BackHandler} from 'react-native'
import {Header, Icon} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import DialogInput from 'react-native-dialog-input';
import axios from 'axios'
const BackAction =  NavigationActions.back({ key: 'Feedback'});
class MyPortfolios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDialogVisible: false,
            project_id: 1
        }
        this.handleBackPress = this.handleBackPress.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSend = this.handleSend.bind(this)
    }
    componentDidMount() {
                this.setState({
                    isDialogVisible: this.props.navigation.state.params.dialogVisibilty
                })
                console.log(this.props.navigation.state.params)
                BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
            }
     componentWillMount() {
                this.setState({
                    project_id: this.props.navigation.state.params.project_id
                })
                BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
            }

            componentWillUnmount() {
                
                BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
            }

            handleBackPress() {
               this.props.navigation.goBack(null);
                return true;
            }
          handleCancel() {
              this.setState({
                  isDialogVisible: false
              })
          } 
        handleSend() {

            this.setState({
                isDialogVisible: false 
            })
        }
    static navigationOptions = {
     drawerIcon: ( 
      <Image source={require('../../../ImageAsset/portfolio.png')} style={{height:32, width:32}}/>
     )
    }                  
   render() { 
        const {goBack} = this.props.navigation
    return (
        <Container>
        <StatusBar
            barStyle="light-content"
            backgroundColor="#6a51ae"
        />
        <Header
            leftComponent={<Icon name='menu' color='#fff' onPress={() => this.props.navigation.toggleDrawer()} />}
            centerComponent={{ text: 'Feedback', style: { color: '#fff' } }}
            rightComponent={ <Icon name="open-in-browser" color='#fff' onPress={ () => goBack(null) } />}
            // rightComponent={<Icon name='home' color="#fff" onPress={() => this.props.navigation.navigate('Home')}/>}
            backgroundColor='red'
          />
        <Content>
        <DialogInput isDialogVisible={this.state.isDialogVisible}
            title={"Feedback"}
            message={"Not Satisfied ?"}
            hintInput ={"Reasons Here..."}
            textInputProps={{autoCorrect:true}}
            submitInput={ (inputText) =>{
                console.log(inputText)
                var data = inputText
                 axios(`http://brandaluminium.com/bal/scripts/API/feedback.php?data=${data}&project_id=${this.state.project_id}`)
                        .then(res =>{console.log(res)},
                              err =>{console.log(err)})
                              .catch(e => console.log(e))
                this.props.navigation.navigate('Projects')
                this.setState({isDialogVisible: false})
                } }
            closeDialog={ () => {this.handleCancel(false)}}>
        </DialogInput>
        </Content>
        </Container>
    )
   }
}
export default MyPortfolios;