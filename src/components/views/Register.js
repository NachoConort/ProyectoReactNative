import { View, Image, Text } from "react-native";
// ESTILOS
import styles from "../../styles/RegisterStyles";
// INPUTS
import RegisterInputs from "../inputs/RegisterInputs";
// BUTTON
import RegisterButton from "../buttons/RegisterButton";

const Register = () => {
  return (
    <View style={styles.container}>
      <Image
      source={require('../../assets/images/elipse.png')} 
      style={styles.elipseImage}/>
      <View style={styles.viewTexts}>
        <Text style={styles.welcome}>Welcome Onboard!</Text>
        <Text style={styles.smalltext}>Let's help you meet up your tasks.</Text>        
      </View>
      <RegisterInputs/>
      <RegisterButton/>
      <Text></Text> 
    </View>
  )
};

export default Register;
