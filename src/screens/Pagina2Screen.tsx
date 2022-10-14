/**
 * Página 2 de la navegación, cuenta con un botón para ir a la página siguiente
 * En este caso la navegación en vez de ser por medio del navigation que llega
 * por props se realiza con el hook de navegación que provee react-navigation
 */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {appTheme} from '../theme/appTheme';

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atrás',
    });
  }, []);

  return (
    <View style={appTheme.viewPantallasNavegacion}>
      <View>
        <TouchableOpacity
          onPress={() => navigator.navigate('Pagina3Screen')}
          style={appTheme.botonNavegar}>
          <Text style={appTheme.textoBotonGrande}>Ir a página 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
