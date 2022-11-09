import { View, Image } from "react-native";

// ESTILOS
import styles from "../../styles/RegisterStyles";

const Register = () => {
  return (
    <View style={styles.container}>
      <Image
      source={require('../../assets/images/elipse.png')} 
      style={styles.elipseImage}/>
    </View>
  )
};

export default Register;
