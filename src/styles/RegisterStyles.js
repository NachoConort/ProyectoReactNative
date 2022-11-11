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
  viewinputs: {
    alignItems: 'center',
    marginTop: 40,
  },
  inputregister: {
    width: '90%',
    height: 50,
    borderRadius: 30,
    marginVertical: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
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
