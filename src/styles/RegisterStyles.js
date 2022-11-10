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
    marginTop: -40,
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
  viewButton: {
    alignItems: 'center',
    marginTop: 50,
  },
  buttonRegister: {
    width: '90%',
    height: 60,
    borderRadius: 30,
    backgroundColor: '#50C2C9',
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
