import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
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
  },
  viewInputs: {
    alignItems: 'center',
    marginTop: 30,
  },
  inputlogin: {
    width: '90%',
    height: 50,
    borderRadius: 30,
    marginVertical: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  pressablePassword: {
    alignSelf: 'center',
    marginTop: 40,
  },
  textPressable: {
    color: '#50C2C9',
    fontSize: 15,
  },
});

export default loginStyles;
