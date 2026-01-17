import { View, Text, TouchableOpacity } from "react-native";
import PostHead from "./posthead";
import { useState } from "react";

const Postcontent = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <View>
      <PostHead />

      <View>
        <Text
          //if readMore is true, show full text else show just two lines of the text
          numberOfLines={readMore ? null : 2}
        >
          This is the content of the post. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Temporibus atque velit inventore! Et
          voluptatem doloremque suscipit minus assumenda temporibus consequuntur
          accusantium labore perferendis aspernatur? Culpa labore soluta nostrum
          nulla eligendi distinctio velit corrupti, praesentium tempore omnis
          assumenda architecto saepe aut.!
          <TouchableOpacity>
            {!readMore && (
              <Text onPress={() => setReadMore(true)} style={{ color: "grey", fontWeight: 650 }}> ...more</Text>
            )}
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Postcontent;
