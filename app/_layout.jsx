import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import ToastManager from "toastify-react-native";
import GlobalStateProvider from "../Context/GlobalContext";
export default function Rootlayout() {
  const [appReady, setAppReady] = useState(false);
  const [fontsLoaded, error] = useFonts({
    "CeraPro-Black": require("../assets/fonts/CeraPro-Black.ttf"),
    "CeraPro-BlackItalic": require("../assets/fonts/CeraPro-BlackItalic.ttf"),
    "CeraPro-Bold": require("../assets/fonts/CeraPro-Bold.ttf"),
    "CeraPro-BoldItalic": require("../assets/fonts/CeraPro-BoldItalic.ttf"),
    "CeraPro-Italic": require("../assets/fonts/CeraPro-Italic.ttf"),
    "CeraPro-Light": require("../assets/fonts/CeraPro-Light.ttf"),
    "CeraPro-LightItalic": require("../assets/fonts/CeraPro-LightItalic.ttf"),
    "CeraPro-Medium": require("../assets/fonts/CeraPro-Medium.ttf"),
    "CeraPro-MediumItalic": require("../assets/fonts/CeraPro-MediumItalic.ttf"),
    "CeraPro-Regular": require("../assets/fonts/CeraPro-Regular.ttf"),
    "CeraPro-Thin": require("../assets/fonts/CeraPro-Thin.ttf"),
    "CeraPro-ThinItalic": require("../assets/fonts/CeraPro-ThinItalic.ttf"),
    CroissantOne: require("../assets/fonts/CroissantOne-Regular.ttf"),
  });

  useEffect(() => {
    if (error) {
      throw error;
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded]);
  const { height } = useWindowDimensions();
  return (
    <>
      <ToastManager
        width={280}
        height={height > 500 ? 50 : 40}
        style={{
          backgroundColor: "white",
          borderColor: "white",
          borderWidth: 1,
        }}
        textStyle={{
          fontSize: 12,
        }}
      />
      {appReady ? (
        <GlobalStateProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="(tab)"
              options={{ headerShown: false, gestureEnabled: false }}
            />
          </Stack>
        </GlobalStateProvider>
      ) : (
        <View className="items-center justify-center  flex-1">
          <ActivityIndicator />
        </View>
      )}
    </>
  );
}
