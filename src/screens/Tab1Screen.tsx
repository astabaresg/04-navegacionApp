import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {Text, View} from 'react-native';
import {appTheme, colores} from '../theme/appTheme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={appTheme.globalMargin}>
      <Text style={appTheme.title}>Iconos</Text>
      <Text>
        <Icon name="beer-outline" size={80} color={colores.primary} />
        <Icon name="construct-outline" size={80} color={colores.primary} />
        <Icon name="fast-food-outline" size={80} color={colores.primary} />
        <Icon name="nutrition-outline" size={80} color={colores.primary} />
        <Icon name="terminal-outline" size={80} color={colores.primary} />
        <Icon name="skull-outline" size={80} color={colores.primary} />
      </Text>
    </View>
  );
};
