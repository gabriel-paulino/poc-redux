import { View, Text, Image, Button, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import "intl";
import "intl/locale-data/jsonp/pt";

import { addNewItem } from "../../store/modules/Cart/reducer";

import Cart from "../../component/Cart";

import styles from "./styles";

import { products } from "../../constants";

import { IProduct } from "../../types/index";

const Shop = () => {
  const dispatch = useDispatch();

  const addCartItemShop = (item: IProduct) => {
    dispatch(addNewItem(item));
  };

  return (
    <View style={styles.container}>
      <Cart />
      <ScrollView>
        {products?.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoBox}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.brandText}>{item.brand}</Text>
              <Text style={styles.priceText}>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.price)}
              </Text>
              <Button
                title="Adicionar ao carrinho"
                onPress={() => addCartItemShop(item)}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Shop;
