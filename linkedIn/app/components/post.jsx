import { View, Text } from "react-native";
import PostHead from "./posthead";

const Post = () => {
  return (
    <View>
      <PostHead />

      <View>
        <Text>
          This is where the post content will go. We are building this step by
          step!
        </Text>
      </View>

    </View>
  );
};

export default Post;
