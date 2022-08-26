import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 40,
    paddingVertical: 20,
  },
  contentCard: {
    backgroundColor: "#000540",
    borderRadius: 100,
    padding: 5,
    marginHorizontal: 5,
  },
  text: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 15,
  },
  modalBody: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemsContainer: {
    flex: 1,
    flexDirection: "column",
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 5,
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 10,
    paddingVertical: 5,
  },
  productInfo: {
    flexDirection: "column",
    width: "60%",
    marginRight: 20,
  },
  itemNameText: {
    width: "60%",
    marginLeft: 10,
  },
  itemPriceText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  image: {
    height: 80,
    width: 80,
  },
});
