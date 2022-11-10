import { Pressable, Text, View } from "react-native";
// ESTILOS
import loginStyles from "../../styles/LoginStyles";

const LoginButton = () => {
  return (
    <View style={loginStyles.viewButton}>
      <Pressable style={loginStyles.buttonLogin}>
        <Text style={loginStyles.textButton}>Log in</Text>
      </Pressable>
    </View>
  )
};

export default LoginButton;
