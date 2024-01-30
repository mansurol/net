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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <WebView source={{ uri: loginUrl }} style={styles.webView} />
      <View style={styles.bottomOverlay} />
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
  bottomOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "7%",
    backgroundColor: "#fff",
  },
});

export default PayBill;
