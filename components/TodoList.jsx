import { FlatList, ScrollView, View } from "react-native";
import TodoTile from "./TodoTile";

export default function TodoList({ todos }) {
  const renderItem = ({ item }) => <TodoTile todo={item} />;

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}
