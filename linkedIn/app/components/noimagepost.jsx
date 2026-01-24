import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
// import PostHead from "./posthead";
import { useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";

const Noimagepost = ({
  content,
  //  ...style,
  contentpost,
  likes,
  commentslikes,
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
        <View style={styles.activitydetails}>
          <View style={styles.icons}>
            <Ionicons
              name="thumbs-up"
              color={"white"}
              backgroundColor={"blue"}
              // size={10}
            />
            <Ionicons
              name="heart"
              color={"white"}
              backgroundColor={"red"}
              // size={10}
            />
            {/* <Ionicons name="thumbs-up" color={'black'} backgroundColor={'red'}/> */}
            <Text>{likes}</Text>
          </View>
          <Text>{commentslikes}</Text>
        </View>
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
  // image: {
  //   width: "100%",
  //   height: 300,
  //   // resizeMode: "cover"
  //   // aspectRatio: 1
  // },

  activitybar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
  },

  activitydetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  icons: {
    flexDirection: "row",
  },
});

export default Noimagepost;
