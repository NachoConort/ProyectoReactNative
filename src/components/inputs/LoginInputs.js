import { TextInput, View } from "react-native";
// ESTILOS
import loginStyles from "../../styles/LoginStyles";

const LoginInputs = () => {
  return (
    <View style={loginStyles.viewInputs}>
      <View style={loginStyles.inputlogin}>
        <TextInput
        placeholder="Enter your e-mail"
        placeholderTextColor={'black'} />
      </View>
      <View style={loginStyles.inputlogin}>
        <TextInput
        placeholder="Enter password"
        placeholderTextColor={'black'} />
      </View>
    </View>
  )
};

export default LoginInputs;
