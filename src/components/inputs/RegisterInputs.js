import { TextInput, View } from "react-native";
import styles from "../../styles/RegisterStyles";

const RegisterInputs = () => {
  return (
    <View style={styles.viewinputs}>
      <View style={styles.inputregister}>
        <TextInput 
        placeholder='Enter your full name'
        placeholderTextColor={'black'} />
      </View>
      <View style={styles.inputregister}>
        <TextInput 
        placeholder='Enter your e-mail'
        placeholderTextColor={'black'} />
      </View>
      <View style={styles.inputregister}>
        <TextInput 
        placeholder='Enter password'
        placeholderTextColor={'black'} />
      </View>
      <View style={styles.inputregister}>
        <TextInput 
        placeholder='Confirm password'
        placeholderTextColor={'black'} />
      </View>
    </View>
  )
};

export default RegisterInputs;
