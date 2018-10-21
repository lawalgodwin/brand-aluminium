import {DrawerNavigator, createBottomTabNavigator,createStackNavigator} from 'react-navigation'
//the More stacknavigator screen
import AboutUs from '../Navigators/Info Stack/AboutUs'
import Contact from '../Navigators/Info Stack/Contact'
import MyPortfolio from '../Navigators/Info Stack/MyPortfolio'
import Services from '../Navigators/Info Stack/Services'
import Rate from '../Navigators/Info Stack/Rate'
//the admin stacknavigator screen
import SignIn from './Admin Stack/SignIn'
import SignUp from './Admin Stack/SignUp'
import CreateProject from './Admin Stack/CreateProject'
//the projects tabnavigator screen
import Completed_Projects from './Projects Tabs/Completed-ProjectTab'
import On_GoingProjectTab from './Projects Tabs/On-GoingProjectTab'
//the user stacknavigator screen
import Login from '../UserPagesStack/userloginPage';
import Home from '../UserPagesStack/Home';
import Gallery from '../UserPagesStack/gallery'
// export const UserScreens = createStackNavigator(
//     {
//         Home : {screen : Home},
//         Login : {screen : Login}
//     },
//     {
//         initialRouteName : 'Login',
//         headerMode: 'none',
//         navigationOptions: {
//             headerVisible: false,
//         }
//     })


   const ProjectsTabs = createBottomTabNavigator(
     {
         ONGOING : {screen : On_GoingProjectTab},
         COMPLETED : {screen : Completed_Projects}
     },
     {
         order : ['ONGOING','COMPLETED'],
         animationEnabled : true
     })

  export const MoreInfo = createStackNavigator(
     {
         //Feedback : {screen : MyPortfolio},
          Services : {screen : Services},
          'Contact Us' : {screen : Contact},
         'About Us' : {screen : AboutUs},
          Rate : {screen : Rate}  
     },
     {
         initialRouteName : 'Contact Us',
                headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
     })
     export const ProjectStack = createStackNavigator(
     {
          Projects : {screen : ProjectsTabs},
          Gallery : {screen : Gallery}  
     },
     {
         initialRouteName : 'Projects',
                headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
     })
export const Admin = createStackNavigator(
    {
        'Sign UP' : {screen : SignUp},
        'Sign In' : {screen : SignIn},
        CreateProject :{screen : CreateProject}

    },
    {
        initialRouteName:'Sign In',
                headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    })

                 