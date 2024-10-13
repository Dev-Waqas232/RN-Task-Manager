import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import TodoTile from "./TodoTile";

export default function TodoList({ todos }) {
  const renderItem = ({ item }) => <TodoTile todo={item} />;

  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
});
