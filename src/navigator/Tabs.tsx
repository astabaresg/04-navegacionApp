import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {TopTapNavigator} from './TopTapNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsANDROID />;
};

//Configuración para Android
const BottomTabANDROID = createMaterialBottomTabNavigator();

const TabsANDROID = () => {
  return (
    <BottomTabANDROID.Navigator
      sceneAnimationEnabled
      barStyle={{
        backgroundColor: colores.primary,
      }}
      >
      <BottomTabANDROID.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => (
            <Text>
              <Icon name="beer-outline" size={18} color={props.color} />
            </Text>
          ),
        }}
        component={Tab1Screen}
      />
      <BottomTabANDROID.Screen
        name="TopTapNavigator"
        options={{
          title: 'TopT',
          tabBarIcon: props => (
            <Text>
              <Icon name="albums-outline" size={18} color={props.color} />
            </Text>
          ),
        }}
        component={TopTapNavigator}
      />
      <BottomTabANDROID.Screen
        name="StackNavigator"
        options={{
          title: 'Stack',
          tabBarIcon: props => (
            <Text>
              <Icon name="file-tray-stacked-outline" size={18} color={props.color} />
            </Text>
          ),
        }}
        component={StackNavigator}
      />
    </BottomTabANDROID.Navigator>
  );
};

//Configuración para iOS
const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarActiveTintColor: colores.primary,
        headerShown: false,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => (
            <Text>
              <Icon name="beer-outline" size={18} color={props.color} />
            </Text>
          ),
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="TopTapNavigator"
        options={{
          title: 'TopT',
          tabBarIcon: props => (
            <Text>
              <Icon name="albums-outline" size={18} color={props.color} />
            </Text>
          )
        }}
        component={TopTapNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{
          title: 'Stack',
          tabBarIcon: props => (
            <Text>
              <Icon name="file-tray-stacked-outline" size={18} color={props.color} />
            </Text>
          )
        }}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
