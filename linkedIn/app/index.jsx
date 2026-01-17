import { Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{ backgroundColor: "lightyellow", flex: 1, padding: 20 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row" }}>
          <Image style={{width: 30, height: 30}}source={require("../assets/images/WhatsApp Image 2.jpeg")} />
        </View>

        <Text>Okay welcome my name is Oreofe-Olanrewaju Christopher</Text>
      </ScrollView>

      <View></View>
    </SafeAreaView>
  );
}
