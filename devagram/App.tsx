import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import Button from "./src/Button";
import Input from "./src/Input";
import { useState } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    'biennale-bold': require('./assets/fonts/Fontspring-DEMO-biennale-bold.otf'),
    'biennale-regular': require('./assets/fonts/Fontspring-DEMO-biennale-regular.otf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
  });

  const [email, setEmail] = useState<string>('');

  return fontsLoaded ? (
    <View style={styles.container}>
        <Button onPress={()=>{}} placeholder="Clique aqui" loading={false} disabled={false}  />
        <Input 
            onChangeText={(e: string) => setEmail(e)} 
            placeholder="Digite seu email" 
            value={email} />
    </View>
  ) : (
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
