import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDEDEE',
    flex: 1,
  },
  elipseImage: {
    width: 250,
    height: 250,
    top: -80,
    left: -50,
  },
  viewTexts: {
    marginTop: -10,
    marginBottom: 20
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  smalltext: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginTop: 20
  },
  viewSignIn: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
  },
  textSignin: {
    color: 'black',
  },
  pressableText: {
    color: '#50C2C9',
  },
});

export default styles;
