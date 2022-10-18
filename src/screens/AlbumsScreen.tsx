import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {appTheme, colores} from '../theme/appTheme';


export const AlbumsScreen = () => {
  const {logout, authState} = useContext(AuthContext);
  return (
    <View style={appTheme.globalMargin}>
      <Text style={appTheme.title}>Albums</Text>
      {authState.isLoggedIn && (
        <TouchableOpacity
          onPress={logout}
          style={{
            ...appTheme.botonSignIn,
            backgroundColor: colores.secondary,
          }}>
          <Text style={appTheme.textoBotonGrande}>logout</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
