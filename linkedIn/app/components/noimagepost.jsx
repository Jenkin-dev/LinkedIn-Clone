import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
// import PostHead from "./posthead";
import { useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";

const Noimagepost = ({
  content,
  //  ...style,
  contentpost,
}) => {
  const [readMore, setReadMore] = useState(false);
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
        {/* <Image style={styles.image} source={contentpost} /> */}
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   image: {
//     width: "100%",
//     height: 300,
//     // resizeMode: "cover"
//     // aspectRatio: 1
//   },
// });

export default Noimagepost;
