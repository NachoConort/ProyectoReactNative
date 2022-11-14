import { View, TextInput } from "react-native";
import styles from "../../styles/InputRyLStyles";

export default function  InputRyL (props) {
  return (
    <View style={styles.viewInput}>
      <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      placeholderTextColor='gray' />
    </View>
  );
};