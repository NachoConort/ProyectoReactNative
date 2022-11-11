import { Image, View, Text } from "react-native";
// ESTILOS
import styles from "../../styles/HomeStyles";
// BUTTON
import ButtonRyL from "../buttons/ButtonRyL";

const Home = (props) => {

  const { navigation } = props;

  const goRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image
      source={require('../../assets/images/elipse.png')}
      style={styles.elipseImage} />
      <Image 
      source={require('../../assets/images/onboarding.png')}
      style={styles.phoneImage} />
      <Text style={styles.title}>Get things done with TODo</Text>
      <View style={styles.viewText}>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna un volupat, tristique lacinia ut. Elementum non turpis nullam ipsum</Text>
      </View>
      <ButtonRyL 
      text='Get Started' 
      onPress={goRegister} />
    </View>
  );
};

export default Home;

