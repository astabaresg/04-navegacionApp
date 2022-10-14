/**
 * Página 3 de la navegación, cuenta con un botón para ir a la página siguiente
 * En este caso se muestra cómo ir a la página anterior (por medio de pop) 
 * y cómo ir a la primera página definida en el stack navigator (por medio de popTop)
 */

import {StackScreenProps} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { appTheme } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Atrás',
    });
  }, []);

  return (
    <View style={appTheme.viewPantallasNavegacion} >
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.pop()
          }
          style={{
            ...appTheme.botonNavegar,
            backgroundColor: '#FFA630',
          }}>
          <Text style={appTheme.textoBotonGrande}>Regresar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.popToTop()
          }
          style={{
            ...appTheme.botonNavegar,
            backgroundColor: '#611C35',
          }}>
          <Text style={appTheme.textoBotonGrande}>Ir Página 1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
