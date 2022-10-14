/**
 * Página 1 de la navegación, cuenta con botones para ir a la página siguiente
 * además del ejemplo de cómo navegar con parámetros
 */
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {appTheme} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={appTheme.viewPantallasNavegacion}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Pagina2Screen')}
          style={appTheme.botonNavegar}>
          <Text style={appTheme.textoBotonGrande}>Ir a página 2</Text>
        </TouchableOpacity>
      </View>

      <Text style={appTheme.subtitle}>Navegar con Argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }
          style={{
            ...appTheme.botonGrande,
            backgroundColor: '#2E5077',
          }}>
          <Icon name="person-circle-outline" size={40} color='#D7E8BA' />
          <Text style={appTheme.textoBotonGrande}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'María',
            })
          }
          style={{
            ...appTheme.botonGrande,
            backgroundColor: '#611C35',
          }}>
          <Icon name="person-circle-outline" size={40} color='#D7E8BA' />
          <Text style={appTheme.textoBotonGrande}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
