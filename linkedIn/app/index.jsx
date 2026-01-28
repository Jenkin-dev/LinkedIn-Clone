import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";

import { Ionicons } from "@expo/vector-icons"; //for the dropdown icon
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import PostHead from "../components/posthead";
import Postcontent from "../components/postcontent";
import BottomTab from "../components/bottomtab";
import Noimagepost from "../components/noimagepost";

export default function Index() {
  const [theme, setTheme] = useState(false); //false for light mode , true for dark mode
  const styles = StyleSheet.create({
    homepage: {
      backgroundColor: theme ? "#121212" : "whitesmoke",
      flex: 1,
      padding: 20,
    },
    post: {
      marginVertical: 5,
      backgroundColor: theme ? "#1E1E1E" : "white",
      padding: 10,
    },

    topbar: {
      flexDirection: "row",
      gap: 20,
      // backgroundColor: "pink",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      marginBottom: 10,
    },
  });

  return (
    <SafeAreaView style={styles.homepage}>
      <MaterialCommunityIcons
        name="theme-light-dark"
        size={24}
        color={theme ? "white" : "black"}
        style={{ alignSelf: "flex-end", paddingBottom: 10 }}
        onPress={() => setTheme(!theme)}
      />
      <View style={styles.topbar}>
        <Image
          style={{ width: 35, height: 35, borderRadius: 25 }}
          source={require("../assets/images/WhatsApp Image 2.jpeg")}
        />

        <Ionicons
          name="search"
          color={'grey'}
          size={20}
          style={{ position: "absolute", left: 60 }}
        />
        <TextInput
          style={{
            borderColor: "grey",
            borderWidth: 1,
            // width: 350,
            flex: 1,
            maxWidth: 700,
            height: 35,
            borderRadius: 17,
            paddingHorizontal: 30,
          }}
          placeholder="Search"
          placeholderTextColor={"grey"}
        />
        <TouchableOpacity>
          <Ionicons
            name="chatbubble-ellipses"
            size={25}
            color={"grey"}
            style={{ transform: [{ scaleX: 1.3 }] }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        // style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.post}>
          <PostHead
            theme={theme}
            Username={"C_Jenkins"}
            Details={"Mobile developer in the making"}
            days={"6d"}
            Profilepicture={require("../assets/images/WhatsApp Image 2.jpeg")}
          />
          <Postcontent
          theme={theme}
            content={
              "This is a demo content where i am using props in a reusable component. I am meant to make it at least more than two lines long in order for the read more button to function properly since I set the number of lines for readmore not true to be 2 lines. Well that' by the way. In this project ,I successfuly used reusable components to Insert the post head and the information that is within the contents of this post "
            }
            contentpost={require("../assets/images/Screenshot (28).png")}
            likes={15}
            commentslikes={"26 comments 15 likes"}
          />
        </View>
        <View style={styles.post}>
          <PostHead
            theme={theme}
            Username={"Chris Jenkins"}
            Profilepicture={require("../assets/images/WhatsApp Image 2025-12-23 at 11.28.55 AM.jpeg")}
            Details={"Computer Sci. Student"}
            days={"9d"}
          />
          <Postcontent
          theme={theme}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae recusandae repellat doloribus deserunt facere. Ducimus modi incidunt excepturi perspiciatis non amet iure, placeat explicabo, debitis qui vitae commodi laudantium harum recusandae obcaecati repudiandae nesciunt, magni quis cumque ab! Error"
            }
            contentpost={require("../assets/images/Screenshot (2).png")}
            likes={32}
            commentslikes={"13 comments 32 likes"}
          />
        </View>

        <View style={styles.post}>
          <PostHead
            theme={theme}
            Profilepicture={require("../assets/images/IMG-20251118-WA0021.jpg")}
            Username={"Unknown User"}
            Details={"Anonymous is power"}
            days={"5d"}
          />
          <Postcontent
          theme={theme}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae recusandae repellat doloribus deserunt facere. Ducimus modi incidunt excepturi perspiciatis non amet iure, placeat explicabo, debitis qui vitae commodi laudantium harum recusandae obcaecati repudiandae nesciunt, magni quis cumque ab! Error "
            }
            contentpost={require("../assets/images/Capture001.png")}
            likes={21}
            commentslikes={"10 comments 21 likes"}
          />
        </View>
        <View style={styles.post}>
          <PostHead
            theme={theme}
            Profilepicture={require("../assets/images/WhatsApp Image 2025-12-23 at 11.28.55 AM.jpeg")}
            Username={"Christopher O.O"}
            Details={"Mobile Development student at TechCrush"}
            days={"2w"}
          />
          <Noimagepost
        theme={theme}
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, dolorem provident quaerat a ratione expedita molestias rem magni. Consectetur aperiam, doloribus sit non ipsam minima inventore pariatur commodi at quidem voluptas quisquam quaerat. Deleniti perferendis ducimus adipisci sequi quos minus, dolores maiores labore culpa numquam sit temporibus sapiente nobis praesentium ipsam incidunt iste earum nulla aspernatur veritatis vitae consequuntur autem animi? Incidunt quisquam labore blanditiis hic recusandae voluptatum laborum laboriosam. Quia esse laborum illo nulla! Qui mollitia voluptatibus vitae quidem quaerat deleniti quia repellat maiores at sit officiis aliquid voluptatum numquam, id asperiores modi corrupti doloremque architecto nihil aut quasi sed iure? Officiis adipisci porro, qui temporibus molestiae labore molestias exercitationem officia ratione consequuntur totam odio fugiat dolore nemo quos cupiditate expedita culpa doloremque. Atque sed aut officia praesentium magni qui nisi, iure rerum quas necessitatibus, maiores omnis facere dolores accusamus minima doloribus dolorem, repellat hic pariatur quam aliquid asperiores soluta! Dolores nisi fugit illo eligendi tempore dicta, sed, perferendis natus ducimus libero mollitia quisquam alias in expedita dolor eaque, repellat nobis culpa! Atque possimus vel ipsam, explicabo eius nesciunt laborum omnis, perspiciatis perferendis quidem repellendus tenetur tempora vero, facilis architecto autem? Ipsum in dolorum dolores magnam error rerum nostrum."
            }
            likes={98}
            commentslikes={"289 comments 98 likes"}
          />
        </View>

        <View style={styles.post}>
          <PostHead
            theme={theme}
            Profilepicture={require("../assets/images/WhatsApp Image 2.jpeg")}
            Username={"Gbengachris87"}
            Details={"Studying at the University of Ilorin"}
            days={"2y"}
          />
          <Noimagepost
          theme={theme}
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, dolorem provident quaerat a ratione expedita molestias rem magni. Consectetur aperiam, doloribus sit non ipsam minima inventore pariatur commodi at quidem voluptas quisquam quaerat. Deleniti perferendis ducimus adipisci sequi quos minus, dolores maiores labore culpa numquam sit temporibus sapiente nobis praesentium ipsam incidunt iste earum nulla aspernatur veritatis vitae consequuntur autem animi? Incidunt quisquam labore blanditiis hic recusandae voluptatum laborum laboriosam. Quia esse laborum illo nulla! Qui mollitia voluptatibus vitae quidem quaerat deleniti quia repellat maiores at sit officiis aliquid voluptatum numquam, id asperiores modi corrupti doloremque architecto nihil aut quasi sed iure? Officiis adipisci porro, qui temporibus molestiae labore molestias exercitationem officia ratione consequuntur totam odio fugiat dolore nemo quos cupiditate expedita culpa doloremque. Atque sed aut officia praesentium magni qui nisi, iure rerum quas necessitatibus, maiores omnis facere dolores accusamus minima doloribus dolorem, repellat hic pariatur quam aliquid asperiores soluta! Dolores nisi fugit illo eligendi tempore dicta, sed, perferendis natus ducimus libero mollitia quisquam alias in expedita dolor eaque, repellat nobis culpa! Atque possimus vel ipsam, explicabo eius nesciunt laborum omnis, perspiciatis perferendis quidem repellendus tenetur tempora vero, facilis architecto autem? Ipsum in dolorum dolores magnam error rerum nostrum."
            }
            likes={23}
            commentslikes={"12 comments 23 likes"}
          />
        </View>

        <View style={styles.post}>
          <PostHead
            theme={theme}
            Profilepicture={require("../assets/images/IMG-20251118-WA0021.jpg")}
            Username={"Chris Oreofe"}
            Details={"Learning frontend dev along side mobile dev"}
            days={"3mo"}
          />
          <Postcontent
          theme={theme}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae recusandae repellat doloribus deserunt facere. Ducimus modi incidunt excepturi perspiciatis non amet iure, placeat explicabo, debitis qui vitae commodi laudantium harum recusandae obcaecati repudiandae nesciunt, magni quis cumque ab! Error"
            }
            contentpost={require("../assets/images/IMG-20250117-WA0063.jpg")}
            likes={34}
            commentslikes={"23 comments 34 likes"}
          />
        </View>

        <View style={styles.post}>
          <PostHead
            theme={theme}
            Profilepicture={require("../assets/images/WhatsApp Image 2.jpeg")}
            Username={"User Name"}
            Details={"Student @ Unilorin|| Student @ TechCrush"}
            days={"2y"}
          />
          <Noimagepost
          theme={theme}
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, dolorem provident quaerat a ratione expedita molestias rem magni. Consectetur aperiam, doloribus sit non ipsam minima inventore pariatur commodi at quidem voluptas quisquam quaerat. Deleniti perferendis ducimus adipisci sequi quos minus, dolores maiores labore culpa numquam sit temporibus sapiente nobis praesentium ipsam incidunt iste earum nulla aspernatur veritatis vitae consequuntur autem animi? Incidunt quisquam labore blanditiis hic recusandae voluptatum laborum laboriosam. Quia esse laborum illo nulla! Qui mollitia voluptatibus vitae quidem quaerat deleniti quia repellat maiores at sit officiis aliquid voluptatum numquam, id asperiores modi corrupti doloremque architecto nihil aut quasi sed iure? Officiis adipisci porro, qui temporibus molestiae labore molestias exercitationem officia ratione consequuntur totam odio fugiat dolore nemo quos cupiditate expedita culpa doloremque. Atque sed aut officia praesentium magni qui nisi, iure rerum quas necessitatibus, maiores omnis facere dolores accusamus minima doloribus dolorem, repellat hic pariatur quam aliquid asperiores soluta! Dolores nisi fugit illo eligendi tempore dicta, sed, perferendis natus ducimus libero mollitia quisquam alias in expedita dolor eaque, repellat nobis culpa! Atque possimus vel ipsam, explicabo eius nesciunt laborum omnis, perspiciatis perferendis quidem repellendus tenetur tempora vero, facilis architecto autem? Ipsum in dolorum dolores magnam error rerum nostrum."
            }
            likes={11}
            commentslikes={"53 comments 11 likes"}
          />
        </View>

        <View style={styles.post}>
          <PostHead
            theme={theme}
            Profilepicture={require("../assets/images/IMG-20251118-WA0021.jpg")}
            Username={"Undefined User"}
            Details={"Anonymous user "}
            days={"10y"}
          />
          <Noimagepost
          theme={theme}
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, dolorem provident quaerat a ratione expedita molestias rem magni. Consectetur aperiam, doloribus sit non ipsam minima inventore pariatur commodi at quidem voluptas quisquam quaerat. Deleniti perferendis ducimus adipisci sequi quos minus, dolores maiores labore culpa numquam sit temporibus sapiente nobis praesentium ipsam incidunt iste earum nulla aspernatur veritatis vitae consequuntur autem animi? Incidunt quisquam labore blanditiis hic recusandae voluptatum laborum laboriosam. Quia esse laborum illo nulla! Qui mollitia voluptatibus vitae quidem quaerat deleniti quia repellat maiores at sit officiis aliquid voluptatum numquam, id asperiores modi corrupti doloremque architecto nihil aut quasi sed iure? Officiis adipisci porro, qui temporibus molestiae labore molestias exercitationem officia ratione consequuntur totam odio fugiat dolore nemo quos cupiditate expedita culpa doloremque. Atque sed aut officia praesentium magni qui nisi, iure rerum quas necessitatibus, maiores omnis facere dolores accusamus minima doloribus dolorem, repellat hic pariatur quam aliquid asperiores soluta! Dolores nisi fugit illo eligendi tempore dicta, sed, perferendis natus ducimus libero mollitia quisquam alias in expedita dolor eaque, repellat nobis culpa! Atque possimus vel ipsam, explicabo eius nesciunt laborum omnis, perspiciatis perferendis quidem repellendus tenetur tempora vero, facilis architecto autem? Ipsum in dolorum dolores magnam error rerum nostrum."
            }
            likes={31}
            commentslikes={"12 comments 31 likes"}
          />
        </View>

        <View style={styles.post}>
          <PostHead
            theme={theme}
            Profilepicture={require("../assets/images/IMG-20251118-WA0015.jpg")}
            Username={"Christopher Olanrewaju"}
            Details={"Junior mobile dev"}
            days={"3min"}
          />
          <Postcontent
          theme={theme}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae recusandae repellat doloribus deserunt facere. Ducimus modi incidunt excepturi perspiciatis non amet iure, placeat explicabo, debitis qui vitae commodi laudantium harum recusandae obcaecati repudiandae nesciunt, magni quis cumque ab! Error"
            }
            contentpost={require("../assets/images/Screenshot (53).png")}
            likes={3}
            commentslikes={"2 comments 3 likes"}
          />
        </View>

        <View style={styles.post}>
          <PostHead
            theme={theme}
            Profilepicture={require("../assets/images/IMG_20251103_174220_170.jpg")}
            Username={"J.Chris"}
            Details={"Computer science student"}
            days={"3y"}
          />
          <Postcontent
          theme={theme}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae recusandae repellat doloribus deserunt facere. Ducimus modi incidunt excepturi perspiciatis non amet iure, placeat explicabo, debitis qui vitae commodi laudantium harum recusandae obcaecati repudiandae nesciunt, magni quis cumque ab! Error"
            }
            contentpost={require("../assets/images/Big sis logo.jpg")}
            likes={14}
            commentslikes={"203 comments 14 likes"}
          />
        </View>
      </ScrollView>
      {/* <BottomTab/> */}
    </SafeAreaView>
  );
}
