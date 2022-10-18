/**
 * Página de ajustes, solo para practicar el drawer navigator
 */
import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';
import {appTheme, colores} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View
      style={{
        ...appTheme.globalMargin,
        marginTop: insets.top,
      }}>
      <Text style={appTheme.title}>Settings</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.favoriteIcon && (
        <Icon
          name={authState.favoriteIcon}
          size={150}
          color={colores.primary}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
});
