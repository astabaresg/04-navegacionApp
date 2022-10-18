import React from 'react'
import { Text, View } from 'react-native'
import { appTheme } from '../theme/appTheme'

export const ChatScreen = () => {
  return (
    <View style={appTheme.globalMargin}>
        <Text style={appTheme.title}>ChatScreen</Text>
    </View>
  )
}
