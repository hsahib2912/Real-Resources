import {createStackNavigator} from 'react-navigation-stack'
import {createSwitchNavigator} from 'react-navigation'
import {createAppContainer} from 'react-navigation'
import logo_screen from './screens/login/logo_screen';
import phone_name from './screens/login/phone_name';
import select_city from './screens/login/select_city';
import resource from './screens/main/resource';
import listpeople from './screens/main/listpeople';

const dashboard = createStackNavigator({
  res:{screen:resource},
  listpeople : {screen:listpeople},
});

const login = createSwitchNavigator({
  logo :{screen:logo_screen},
  phone_name : {screen:phone_name},
  select_city : {screen:select_city,navigationOptions:{ headerShown:null,headerLeft:()=> null}},
  res:{screen:dashboard},
},{
  initialRouteName: 'phone_name'
});

export default createAppContainer(login);