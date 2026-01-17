import { View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const Post = () => {
  return (
    //The view below is to be in a flex row containig (Profie Pic), (Profile details) , (follow button)
    <View style={{flexDirection: "row", alignItems: "center",}}>
      <Image
        style={{ width: 50, height: 50, borderRadius: 35 }}
        source={require("../components/assets/images/WhatsApp Image 2.jpeg")}
      />
      <View>
        <Text></Text>
      </View>
      <Text>Follow</Text>
      {/* <Ionicons name="ellipsis-vertical"/> */}
      <Entypo name="dots-three-vertical"/>
    </View>
  );
};

export default Post;
