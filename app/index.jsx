import { Redirect } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
       <Redirect href={"(tab)/Products"} />
    </SafeAreaView>
  );
}
