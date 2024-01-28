import React from "react";
import { WebView } from "react-native-webview";

const PayBill = () => {
  const loginUrl = "https://netwalabd.com/pay.php?c=200";

  return <WebView source={{ uri: loginUrl }} />;
};

export default PayBill;
