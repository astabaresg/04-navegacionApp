import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {appTheme, colores} from '../theme/appTheme';

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);

  return (
    <View style={appTheme.globalMargin}>
      <Text style={appTheme.title}>ContactsScreen</Text>
      {!authState.isLoggedIn && (
        <TouchableOpacity
          onPress={signIn}
          style={{
            ...appTheme.botonSignIn,
            backgroundColor: colores.primary,
          }}>
          <Text style={appTheme.textoBotonGrande}>SignIn</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
