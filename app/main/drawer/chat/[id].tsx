// import { useLocalSearchParams } from "expo-router";
// import { useEffect, useState } from "react";
// import { View, TextInput, Button, FlatList, Text } from "react-native";
// import { supabase } from "@/utils/supabase"; // your Supabase client instance
// import { v4 as uuidv4 } from "uuid";

// export default function ChatScreen() {
//   const { id } = useLocalSearchParams();
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     fetchMessages();
//   }, [id]);

//   async function fetchMessages() {
//     const { data, error } = await supabase
//       .from("messages")
//       .select("*")
//       .eq("conversation_id", id)
//       .order("created_at", { ascending: true });

//     if (!error) setMessages(data);
//   }

//   async function sendMessage() {
//     const { error } = await supabase.from("messages").insert({
//       id: uuidv4(),
//       conversation_id: id,
//       content: input,
//       role: "user",
//     });

//     if (!error) {
//       setInput("");
//       fetchMessages(); // refresh
//     }
//   }

//   return (
//     <View style={{ flex: 1, padding: 16 }}>
//       <FlatList
//         data={messages}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <Text style={{ marginVertical: 4 }}>
//             <Text style={{ fontWeight: "bold" }}>{item.role}:</Text> {item.content}
//           </Text>
//         )}
//       />
//       <TextInput
//         value={input}
//         onChangeText={setInput}
//         placeholder="Type your message..."
//         style={{ borderWidth: 1, borderColor: "#ccc", padding: 8, marginBottom: 8 }}
//       />
//       <Button title="Send" onPress={sendMessage} />
//     </View>
//   );
// }

import { View, Text } from 'react-native'
import React from 'react'

const ID = () => {
  return (
    <View>
      <Text>ID</Text>
    </View>
  )
}

export default ID