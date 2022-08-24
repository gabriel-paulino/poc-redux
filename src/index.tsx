import { SafeAreaView } from "react-native";
import Shop from "../src/screen/Shop";

/*
import { Provider } from "react-redux";
import store from "./store";
*/

const AppStartup = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      <SafeAreaView>
        <Shop/>
      </SafeAreaView>
      {/* </Provider> */}
    </>
  );
};

export default AppStartup;
