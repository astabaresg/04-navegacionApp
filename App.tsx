/**
 * Creado por Alvaro Sebastián Tabares Gaviria basado en el curso React Native: Aplicaciones nativas para IOS y Android
 * dictado por el docente Fernando Herrera en Udemy
 * Aplicación para mostrar lo básico sobre la navegación en react native
 * por medio de distintas librerias react-navigation
 * Para más proyectos como este puedes ir a mi github astabaresg
 */
import 'react-native-gesture-handler'; //a pesar de no usarse no se puede eliminar
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { Text } from 'react-native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import {MenuLateral} from './src/navigator/MenuLateral';
import {AuthProvider} from './src/context/AuthContext';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/> */}
        {/* <MenuLateralBasico/> */}
        <MenuLateral />
        {/* <Tabs/> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default App;
