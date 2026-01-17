import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons"; //for the dropdown icon
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{ backgroundColor: "whitesmoke", flex: 1, padding: 20 }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          // backgroundColor: "pink",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Image
          style={{ width: 35, height: 35, borderRadius: 25 }}
          source={require("../assets/images/WhatsApp Image 2.jpeg")}
        />

        <Ionicons
          name="search"
          size={20}
          style={{ position: "absolute", left: 60 }}
        />
        <TextInput
          style={{
            borderColor: "grey",
            borderWidth: 1,
            // width: 350,
            flex: 1,
            maxWidth: 700,
            height: 35,
            borderRadius: 15,
            paddingHorizontal: 30,
          }}
          placeholder="Search"
          placeholderTextColor={"grey"}
        />  
        <TouchableOpacity>
          <Ionicons
            name="chatbubble-ellipses"
            size={25}
            color={"grey"}
            style={{ transform: [{ scaleX: 1.3 }] }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text>Okay welcome my name is Oreofe-Olanrewaju Christopher</Text>
      </ScrollView>

      <View></View>
    </SafeAreaView>
  );
}
