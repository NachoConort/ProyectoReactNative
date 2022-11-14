import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDEE',
  },
  elipseImage: {
    width: 250,
    height: 250,
    top: -80,
    left: -50,
  },
  textWelcome: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    marginTop: -90,
  },
  phoneImage: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  pressablePassword: {
    alignSelf: 'center',
    marginTop: 40,
  },
  textPressable: {
    color: '#50C2C9',
    fontSize: 15,
  },
  viewSignIn: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  textSignin: {
    color: 'black',
  },
  pressableText: {
    color: '#50C2C9',
  },
});

export default styles;
