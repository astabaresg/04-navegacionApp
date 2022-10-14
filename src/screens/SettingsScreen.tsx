/**
 * Página de ajustes, solo para practicar el drawer navigator
 */
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { appTheme } from '../theme/appTheme'

export const SettingsScreen = () => {
  return (
    <View>
      <Image
      style={styles.image}
      source={require('../../assets/images/background.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
});
