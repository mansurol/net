import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Src/Screen/LoginScreen";
import PayBill from "./Src/Screen/PayBill";
import BottomTab from "./Navigation/BottomTab";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </View>
  );
}
