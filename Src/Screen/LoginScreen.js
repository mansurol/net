import React from "react";
import { WebView } from "react-native-webview";

const LoginScreen = () => {
  const loginUrl = "https://care.netwalabd.com/";

  return <WebView source={{ uri: loginUrl }} />;
};

export default LoginScreen;
