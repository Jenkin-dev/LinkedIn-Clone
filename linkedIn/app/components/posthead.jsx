import { View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
const PostHead = ({Username, Details, Profilepicture, days}) => {
  return (


    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        // backgroundColor: "white",
        marginVertical: 10,
        // justifyContent: "flex-end"
      }}
    >
      <Image
        style={{ width: 50, height: 50, borderRadius: 35 }}
        source={Profilepicture}
      />
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
         {Username}
          </Text>
          <Ionicons name="shield-checkmark-outline" size={15} />
          <View style={{ flexDirection: "row", gap: 0 }}>
            <Entypo name="dot-single" />
            {/* <Text style={{ fontSize: 10 }}>3rd+</Text> */}
          </View>
        </View>

        <Text style={{ fontSize: 12 }}>{Details}.</Text>
        <Text style={{ fontSize: 12 }}>{days}</Text>
      </View>
      <TouchableOpacity style={{ flexDirection: "row", gap: 10 }}>
        <Text style={{ color: "blue" }}>Follow</Text>
        {/* <Ionicons name="ellipsis-vertical"/> */}
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="dots-three-vertical" size={15} />
      </TouchableOpacity>
    </View>
  );
};

export default PostHead;
