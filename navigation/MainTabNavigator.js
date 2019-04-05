import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'الرئيسية',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'احدث المنتجات',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'صمم بنفسك',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-color-palette-outline' : 'md-color-palette'}
    />
  ),
};

export default createBottomTabNavigator({
  SettingsStack,
  LinksStack,
  HomeStack,

},{
  initialRouteName: 'HomeStack',
  tabBarOptions:{
    inactiveBackgroundColor: '#22a6b3',
    inactiveTintColor:'#130f40',
    activeTintColor: '#22a6b3',
    activeBackgroundColor:'#130f40',

    style: {
      activeTintColor: 'red',

    },
    labelStyle:{
      fontSize:14,
      fontFamily:'cairo'
    }
  }
});
