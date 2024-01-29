import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { WebView } from "react-native-webview";

const PayBill = () => {
  const loginUrl = "https://netwalabd.com/pay.php?c=200";
  const [keyboardShown, setKeyboardShown] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShown(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShown(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const getMarginTop = () => {
    if (Platform.OS === "android") {
      return keyboardShown ? 35 : 225;
    } else if (Platform.OS === "ios") {
      return keyboardShown ? 20 : 50;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <WebView
        source={{ uri: loginUrl }}
        style={[styles.webView, { marginTop: getMarginTop() }]}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#263237",
  },
  webView: {
    flex: 1,
    backgroundColor: "#263237",
  },
});

export default PayBill;
