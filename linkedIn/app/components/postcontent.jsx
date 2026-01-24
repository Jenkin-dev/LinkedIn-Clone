import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
// import PostHead from "./posthead";
import { useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";

const Postcontent = ({
  content,
  //  ...style,
  contentpost,
}) => {
  const [readMore, setReadMore] = useState(false);

  const { width, height } = Image.resolveAssetSource(contentpost); //this takes the exact scale of the image in content post

  const dynamicRatio = width / height;
  return (
    <View>
      {/* <PostHead /> */}

      <View>
        <Text
          //if readMore is true, show full text else show just two lines of the text
          numberOfLines={readMore ? undefined : 2}
        >
          {content}
        </Text>
        {!readMore && (
          <Text
            onPress={() => setReadMore(!readMore)}
            style={{ color: "grey", fontWeight: 600 }}
          >
            more
          </Text>
        )}

        {readMore && (
          <Text
            onPress={() => setReadMore(!readMore)}
            style={{ color: "grey", fontWeight: 600 }}
          >
            less
          </Text>
        )}
        <Image
          style={[styles.image, { aspectRatio: dynamicRatio }]}
          source={contentpost}
        />
      </View>

      <View style={styles.activitybar}>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Ionicons name="thumbs-up-outline" size={20} color="black" />
          <Text style={{ color: "grey", fontSize: 10 }}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <Ionicons name="chatbox-outline" size={20} color="black" />
          <Text style={{ color: "grey", fontSize: 10 }}>Comment</Text>
        </TouchableOpacity>
       

        <TouchableOpacity style={{ alignItems: "center" }}>
          <Ionicons name="sync-outline" size={20} color="black" />
          <Text style={{ color: "grey", fontSize: 10 }}>Repost</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <Ionicons name="paper-plane-outline" size={20} color="black" />
          <Text style={{ color: "grey", fontSize: 10 }}>Send</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: undefined,
    // resizeMode: "cover",
    // aspectRatio: width / height,
  },

  activitybar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15
  },
});

export default Postcontent;
