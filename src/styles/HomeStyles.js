import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDEE'
  },
  elipseImage: {
    width: 250,
    height: 250,
    top: -80,
    left: -50,
  },
  phoneImage: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: -40,
  },
  viewText: {
    marginTop: 20,
    width: '70%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
});

export default styles;
