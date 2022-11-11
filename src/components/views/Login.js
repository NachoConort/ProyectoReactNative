import { View, Image, Text, Pressable } from "react-native";
// ESTILOS
import loginStyles from "../../styles/LoginStyles";
// INPUTS
import LoginInputs from "../inputs/LoginInputs";
// BUTTON
import ButtonRyL from "../buttons/ButtonRyL";

const Login = () => {
  return (
    <View style={loginStyles.container}>
      <Image
      source={require('../../assets/images/elipse.png')} 
      style={loginStyles.elipseImage} />
      <Text style={loginStyles.textWelcome}>Welcome Back!</Text>
      <Image 
      source={require('../../assets/images/login.png')}
      style={loginStyles.phoneImage} />
      <LoginInputs/>
      <Pressable style={loginStyles.pressablePassword}>
        <Text style={loginStyles.textPressable}>Forgot password</Text>
      </Pressable>
      <ButtonRyL text='Log in'/>
    </View>
  )
};

export default Login;
