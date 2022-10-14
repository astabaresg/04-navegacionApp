import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {RootStackParams} from '../navigator/StackNavigator';
import {appTheme} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * Agregar los tipos <RootStackParams, 'PersonaScreen'> asegura que trabajemos
 * con la información que debe de ser, generando que el código sea mantenible
 * con el tiempo además de mucho más legible
 * Opción recomendada por los desarrolladores de StackNavigator
 */

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

// no tan ideal pero mucho más rápido

// interface RouterParams{
//     id:number,
//     nombre:string,
// }

export const PersonaScreen = ({navigation, route}: Props) => {
  // no tan ideal pero mucho más rápido
  //   const params = route.params as RouterParams;

  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  return (
    <View style={{
      ...appTheme.globalMargin,
      alignItems:'center',
      marginVertical:250
      }}>
      <View style={appTheme.personaContainer}>
        <Icon name="information-circle-outline" size={40} />
        <Text style={appTheme.personaTexto} >{`Identificador: ${params.id}`}</Text>
      </View>
      <View style={appTheme.personaContainer}>
        <Icon name="people-outline" size={40} />
        <Text style={appTheme.personaTexto}>{`Nombre: ${params.nombre}`}</Text>
      </View>
    </View>
  );
};
