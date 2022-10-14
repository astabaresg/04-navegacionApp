/**
 * Drawer Navigator manual y personalizado
 */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {appTheme} from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator drawerContent={props => <ContenidoMenu {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" options={{headerShown:false}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const ContenidoMenu = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={appTheme.avatarContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4139/4139993.png',
          }}
          style={appTheme.avatar}
        />
      </View>

      {/* Opciones del menú */}
      <View style={appTheme.menuContainer}>
        <TouchableOpacity
          style={appTheme.menuBoton}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={appTheme.menuTexto}> <Icon name="navigate-circle-outline" size={22} color='#0C1821'/> Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={appTheme.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={appTheme.menuTexto}> <Icon name="cog-outline" size={22} color='#0C1821' /> Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
