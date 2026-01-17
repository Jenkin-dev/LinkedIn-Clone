import { View, Text, TouchableOpacity } from "react-native";
import PostHead from "./posthead";

const Postcontent = () => {
  return (
    <View>
      <PostHead />

      <View
      //   style={{ flexDirection: "row"}}
      >
        <Text>
          This is the content of the post. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Suscipit eaque possimus est consequuntur
          ad, magni perspiciatis iusto enim consequatur sapiente!  
          <TouchableOpacity>
            <Text style={{ color: "grey", fontWeight: 650}}>  ...more</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Postcontent;
