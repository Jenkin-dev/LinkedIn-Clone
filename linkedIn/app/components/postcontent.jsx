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
        <Image style={[styles.image, {aspectRatio: dynamicRatio}]} source={contentpost} />
      </View>

      <View>
        <Ionicons name="thumbs-up-outline" size={20} />
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

});

export default Postcontent;
