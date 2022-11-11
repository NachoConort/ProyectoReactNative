import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/ButtonRyLStyles";

const ButtonRyL = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.textButton}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
};

export default ButtonRyL;
