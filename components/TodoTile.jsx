import { Text, View } from "react-native";

export default function TodoTile({ todo }) {
  return (
    <View>
      <Text>{todo.title}</Text>
    </View>
  );
}
