import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { WebView } from "react-native-webview";
import { useIsFocused } from "@react-navigation/native"; // Import useIsFocused

const LoginScreen = () => {
  const loginUrl = "https://care.netwalabd.com/";
  const [keyboardShown, setKeyboardShown] = useState(false);
  const isFocused = useIsFocused(); // Use useIsFocused hook

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
      return keyboardShown ? 20 : 155;
    } else if (Platform.OS === "ios") {
      return keyboardShown ? 20 : 50;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {isFocused && ( // Only render the WebView when the screen is focused
        <WebView
          source={{ uri: loginUrl }}
          style={[styles.webView, { marginTop: getMarginTop() }]}
        />
      )}
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

export default LoginScreen;
