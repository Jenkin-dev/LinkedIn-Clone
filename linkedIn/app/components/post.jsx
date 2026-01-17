import { View, Text, TouchableOpacity } from "react-native";
import PostHead from "./posthead";

const Post = () => {
  return (
    <View>
      <PostHead />

      <View 
    //   style={{ flexDirection: "row"}}
      >
        <Text>
            This is the content of the post. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eaque possimus est consequuntur ad, magni perspiciatis iusto enim consequatur sapiente!
        </Text>
        <TouchableOpacity><Text>...more</Text></TouchableOpacity>
      </View>

    </View>
  );
};

export default Post;
