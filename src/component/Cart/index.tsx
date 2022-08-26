import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  Button,
  Image,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  cartStateData,
  removeCartItem,
} from "../../store/modules/Cart/reducer";
import styles from "./styles";

const Cart = () => {
  const dispatch = useDispatch();
  const [showCartModal, setShowCartModal] = useState(false);
  const products = useSelector(cartStateData);

  const removeCartItemShop = (index: number) => {
    dispatch(removeCartItem(index));
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={showCartModal}
        onRequestClose={() => setShowCartModal(!showCartModal)}
      >
        <View style={styles.modalBody}>
          <TouchableOpacity onPress={() => setShowCartModal(!showCartModal)}>
            <AntDesign name="close" size={24} color="black" />
            <Text>Fechar</Text>
          </TouchableOpacity>
          {products.length > 0 ? (
            <View style={styles.itemsContainer}>
              {products.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <View key={index} style={styles.productInfo}>
                    <Text style={styles.itemNameText}>{item.name}</Text>
                    <Text style={styles.itemPriceText}>
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(item.price)}
                    </Text>
                  </View>
                  <Button
                    title="Remover"
                    onPress={() => removeCartItemShop(index)}
                    color="#DD5555"
                  />
                </View>
              ))}
              <Text style={styles.itemPriceText}>{`TOTAL: ${Intl.NumberFormat(
                "pt-BR",
                {
                  style: "currency",
                  currency: "BRL",
                }
              ).format(
                products.reduce((total, product) => total + product.price, 0)
              )}`}</Text>
            </View>
          ) : (
            <View>
              <Text>Adicione itens ao seu carrinho</Text>
            </View>
          )}
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setShowCartModal(!showCartModal)}>
        <AntDesign name="shoppingcart" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.contentCard}>
        <Text style={styles.text}>{products?.length ?? 0}</Text>
      </View>
    </View>
  );
};

export default Cart;
