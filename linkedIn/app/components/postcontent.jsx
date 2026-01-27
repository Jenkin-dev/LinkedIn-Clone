import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
// import PostHead from "./posthead";
import { useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";

const Postcontent = ({
  content,
  //  ...style,
  contentpost,
  likes,
  commentslikes,
}) => {
  const [readMore, setReadMore] = useState(false);
  const [width, height] = [
    Image.resolveAssetSource(contentpost).width,
    Image.resolveAssetSource(contentpost).height,
  ];
  const [liked, setLiked] = useState(false);
  const [commented, setCommented] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [sent, setSent] = useState(false);

  const dynamicRatio = width / height;
  return (
    <View>
      {/* <PostHead /> */}

      <View>
        <Text
          //if readMore is true, show full text else show just two lines of the text
          numberOfLines={readMore ? undefined : 2}
          onPress={() => setReadMore(!readMore)} 
          style = {styles.post}
        >
          {content}
        </Text>
        <Text style={{ color: "grey", fontWeight: 600 }}>
          {readMore ? "...see less" : " ...see more"}
        </Text>

        <Image
          style={[styles.image, { aspectRatio: dynamicRatio }]}
          source={contentpost}
        />
      </View>
      <View style={styles.activitydetails}>
        <View style={styles.icons}>
          <View style={{ borderRadius: 10, backgroundColor: "blue" }}>
            <Ionicons
              name="thumbs-up"
              color={"white"}
              // backgroundColor={"blue"}
              size={15}
            />
          </View>

          <View style={{ borderRadius: 10, backgroundColor: "red" }}>
            <Ionicons
              name="heart"
              color={"white"}
              // backgroundColor={"red"}
              size={15}
            />
          </View>
          {/* <Ionicons name="thumbs-up" color={'black'} backgroundColor={'red'}/> */}
          <Text>{likes}</Text>
        </View>
        <Text>{commentslikes}</Text>
      </View>

      <View style={styles.activitybar}>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Ionicons
            name={liked ? "thumbs-up" : "thumbs-up-outline"}
            size={20}
            color={liked ? "blue" : "black"}
            onPress={() => setLiked(!liked)}
          />
          <Text style={{ color: "grey", fontSize: 10 }}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <Ionicons
            name="chatbox-outline"
            size={20}
            color={commented ? "blue" : "black"}
            onPress={() => setCommented(!commented)}
          />
          <Text style={{ color: "grey", fontSize: 10 }}>Comment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <Ionicons
            name="sync-outline"
            size={20}
            color={reposted ? "blue" : "black"}
            onPress={() => setReposted(!reposted)}
          />
          <Text style={{ color: "grey", fontSize: 10 }}>Repost</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <Ionicons
            name= {sent ? "paper-plane" : "paper-plane-outline"}
            size={20}
            color= {sent ? "blue" : "black"}
            onPress={() => setSent(!sent)}
          />
          <Text style={{ color: "grey", fontSize: 10 }}>{sent ? 'sent' : 'send'}</Text>
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
    paddingTop: 3,
  },

  activitydetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  icons: {
    flexDirection: "row",
  },
});

export default Postcontent;
