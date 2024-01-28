import React from "react";
import { WebView } from "react-native-webview";

const HomeScreen = () => {
  const loginUrl = "https://care.netwalabd.com/";

  return <WebView source={{ uri: loginUrl }} />;
};

export default HomeScreen;
