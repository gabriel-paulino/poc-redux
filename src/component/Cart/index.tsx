import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

const Cart = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert("Teste")}>
        <AntDesign name="shoppingcart" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.contentCard}>
        <Text style={styles.text}>0</Text>
      </View>
    </View>
  );
};

export default Cart;
