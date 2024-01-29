import { StatusBar, View } from "react-native";
import BottomTab from "./Navigation/BottomTab";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#000" />
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </View>
  );
}
