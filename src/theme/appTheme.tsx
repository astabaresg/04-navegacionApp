/**
 * temas globales de la aplicación
 */
import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#340068',
  secondary:'#FF6978',
  tertiary:'#B1EDE8',
  textWhite:'#fffcf9',
};

export const appTheme = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  viewPantallasNavegacion: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  personaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  personaTexto: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  botonNavegar: {
    width: 300,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#4DA1A9',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  botonGrande: {
    width: 120,
    height: 120,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginVertical: 20,
  },
  botonSignIn:{
    alignSelf:'center',
    width: 100,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginVertical: 20,
  },
  textoBotonGrande: {
    color: colores.textWhite,
    fontWeight: 'bold',
    fontSize: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuBoton: {
    marginVertical: 20,
  },
  menuTexto: {
    fontSize: 20,
  },
});
