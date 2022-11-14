import { View, Image, Text, Pressable } from "react-native";
// ESTILOS
import styles from "../../styles/RegisterStyles";
// INPUTS
import InputRyL from "../inputs/InputRyL";
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
      <InputRyL placeholder='Enter your full name' />
      <InputRyL placeholder='Enter your e-mail' />
      <InputRyL placeholder='Enter password' />
      <InputRyL placeholder='Confirm password' />
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
