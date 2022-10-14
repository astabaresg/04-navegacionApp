import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {appTheme, colores} from '../theme/appTheme';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
  // const {top: paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarActiveTintColor: colores.primary,
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="ChatScreen"
        options={{
          title: 'Chat',
          tabBarIcon: props => (
            <Text>
              <Icon name="chatbox-outline" size={18} color={props.color} />
            </Text>
          ),
        }}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactsScreen"
        options={{
          title: 'Contacts',
          tabBarIcon: props => (
            <Text>
              <Icon name="people-outline" size={18} color={props.color} />
            </Text>
          ),
        }}
        component={ContactsScreen}
      />
      <Tab.Screen
        name="AlbumsScreen"
        options={{
          title: 'Albums',
          tabBarIcon: props => (
            <Text>
              <Icon name="images-outline" size={18} color={props.color} />
            </Text>
          ),
        }}
        component={AlbumsScreen}
      />
    </Tab.Navigator>
  );
};
