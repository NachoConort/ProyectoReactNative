import { Pressable, View, Text } from "react-native";
import styles from "../../styles/RegisterStyles";

const RegisterButton = () => {
  return (
    <View style={styles.viewButton}>
      <Pressable
        style={styles.buttonRegister}
        title="Register"
        onPress={{}}>
          <Text style={styles.textButton}>Register</Text>
      </Pressable>
    </View>
  )
};

export default RegisterButton;
