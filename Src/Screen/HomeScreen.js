import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { WebView } from "react-native-webview";

const HomeScreen = () => {
  const loginUrl = "https://care.netwalabd.com/";
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
      return keyboardShown ? 0 : 0;
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

export default HomeScreen;
