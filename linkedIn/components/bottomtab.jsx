import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TouchableOpacity style={{alignItems: "center"}}><Ionicons name="home" size={30} color='#7597a2' /><Text style={{color: 'grey', fontSize: 10}}>Home</Text></TouchableOpacity>
      <TouchableOpacity style={{alignItems: "center"}}><Ionicons name="people" size={30} color="grey" /><Text style={{color: 'grey', fontSize: 10}}>Network</Text></TouchableOpacity>
      <TouchableOpacity style={{alignItems: "center"}}><Ionicons name="duplicate" size={30} color="grey" /><Text style={{color: 'grey', fontSize: 10}}>Post</Text></TouchableOpacity>
      <TouchableOpacity style={{alignItems: "center"}}><Ionicons name="notifications" size={30} color="grey" /><Text style={{color: 'grey', fontSize: 10}}>Notifications</Text></TouchableOpacity>
      <TouchableOpacity style={{alignItems: "center"}}><Ionicons name="briefcase" size={30} color="grey" /><Text style={{color: 'grey', fontSize: 10}}>Jobs</Text></TouchableOpacity>
    </View>
  );
};

export default BottomTab;
