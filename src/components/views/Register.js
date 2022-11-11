import { View, Image, Text, Pressable } from "react-native";
// ESTILOS
import styles from "../../styles/RegisterStyles";
// INPUTS
import RegisterInputs from "../inputs/RegisterInputs";
// BUTTON
import ButtonRyL from "../buttons/ButtonRyL";

const Register = (props) => {

  const { navigation } = props;

  const goLogin = () => {
    navigation.navigate('Login')
  };

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
      <ButtonRyL text='Register' />
      <View style={styles.viewSignIn}>
        <Text style={styles.textSignin}>Already have an account?</Text>
        <Pressable onPress={goLogin}>
          <Text style={styles.pressableText}> Sign in</Text>
        </Pressable>
      </View>
    </View>
  )
};

export default Register;
