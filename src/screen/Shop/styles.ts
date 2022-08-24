import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#EDEDEB',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  image: {
    height: 150,
    width: 150,
  },
  infoBox:{
    marginLeft: 15,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  brandText: {
    fontSize: 12,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addCart: {
    color: '#000',
  },
  removeCart: {
    color: '#000',
  },
});
