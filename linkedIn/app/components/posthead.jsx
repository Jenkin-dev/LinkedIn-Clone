import { View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { Entypo } from "@expo/vector-icons";
const PostHead = ({ Username, Details, Profilepicture, days, theme }) => {
  const [followed, setfollowed] = useState(false);
  const textcolor = theme ? "white" : "black";

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        // backgroundColor: "white",
        marginVertical: 10,
        // justifyContent: "flex-end"
        // color: textcolor,
      }}
    >
      <Image
        style={{ width: 50, height: 50, borderRadius: 35 }}
        source={Profilepicture}
      />
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 17, color: textcolor }}>
            {Username}
          </Text>
          <MaterialIcons name="verified" size={15} color={textcolor} />
          <View style={{ flexDirection: "row", gap: 0 }}>
            <Entypo name="dot-single" color={textcolor} />
            {/* <Text style={{ fontSize: 10 }}>3rd+</Text> */}
          </View>
        </View>

        <Text style={{ fontSize: 12, color: textcolor }}>{Details}</Text>
        <Text style={{ fontSize: 12, color: textcolor }}>{days}</Text>
      </View>
      <TouchableOpacity style={{ flexDirection: "row", gap: 10 }}>
        <Text
          onPress={() => setfollowed(!followed)}
          style={{ color: followed ? "purple" : "blue" }}
        >
          {followed ? "✔Following" : "Follow"}
        </Text>
        {/* <Ionicons name="ellipsis-vertical"/> */}
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="dots-three-vertical" size={15} color={textcolor} />
      </TouchableOpacity>
    </View>
  );
};

export default PostHead;
