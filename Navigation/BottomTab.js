import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Routes from "../Utility/Routes";
import HomeScreen from "../Src/Screen/HomeScreen";
import PayBill from "../Src/Screen/PayBill";
import LoginScreen from "../Src/Screen/LoginScreen";

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === Routes.HomeScreen) {
              iconName = focused ? "home-sharp" : "home-outline";
            } else if (route.name === Routes.Paybill) {
              iconName = focused ? "apps-sharp" : "apps-outline";
            } else if (route.name === Routes.LoginScreen) {
              iconName = focused ? "log-in" : "log-in-outline";
            }

            return <Icon name={iconName} size={34} color={color} />;
          },
          tabBarLabelStyle: {
            fontSize: 17,
            paddingBottom: 25,
          },
          tabBarStyle: {
            height: 90,
            width: "100%",
            alignSelf: "center",
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name={Routes.HomeScreen} component={HomeScreen} />
        <Tab.Screen name={Routes.Paybill} component={PayBill} />
        <Tab.Screen name={Routes.LoginScreen} component={LoginScreen} />
      </Tab.Navigator>

      <View style={styles.bottomGrayArea} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BottomTab;
