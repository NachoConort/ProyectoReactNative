import { View, Image, Text, Pressable } from "react-native";
// ESTILOS
import styles from "../../styles/LoginStyles";
// INPUTS
import LoginInputs from "../inputs/LoginInputs";
// BUTTON
import ButtonRyL from "../buttons/ButtonRyL";

const Login = (props) => {

  const { navigation } = props;

  const goRegister = () => {
    navigation.navigate('Register')
  };

  return (
    <View style={styles.container}>
      <Image
      source={require('../../assets/images/elipse.png')} 
      style={styles.elipseImage} />
      <Text style={styles.textWelcome}>Welcome Back!</Text>
      <Image 
      source={require('../../assets/images/login.png')}
      style={styles.phoneImage} />
      <LoginInputs/>
      <Pressable style={styles.pressablePassword}>
        <Text style={styles.textPressable}>Forgot password</Text>
      </Pressable>
      <ButtonRyL text='Log in'/>
      <View style={styles.viewSignIn}>
        <Text style={styles.textSignin}>Don't have an account?</Text>
        <Pressable onPress={goRegister}>
          <Text style={styles.pressableText}> Sign up</Text>
        </Pressable>
      </View>
    </View>
  )
};

export default Login;
