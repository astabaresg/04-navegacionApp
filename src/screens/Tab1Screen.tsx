import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {Text, View} from 'react-native';
import {appTheme, colores} from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={appTheme.globalMargin}>
      <Text style={appTheme.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="beer-outline" /> 
        <TouchableIcon iconName="construct-outline" /> 
        <TouchableIcon iconName="fast-food-outline" /> 
        <TouchableIcon iconName="nutrition-outline" /> 
        <TouchableIcon iconName="terminal-outline" /> 
        <TouchableIcon iconName="skull-outline" /> 
      </Text>
    </View>
  );
};
