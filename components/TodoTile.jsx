import { StyleSheet, Text, View } from "react-native";

export default function TodoTile({ todo }) {
  const CATEGORYCOLORS = [
    {
      name: "hobby",
      bg: "#abff9e",
      color: "#00b300",
    },
    {
      name: "personal",
      bg: "#8ac6ff",
      color: "#0018f0",
    },
    {
      name: "work",
      bg: "#ffa7a1",
      color: "#990a00",
    },
  ];

  const getColors = (category) => {
    const colors = CATEGORYCOLORS.find((item) => item.name === category);
    return colors;
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    return `${day}/${month}/${year}`;
  };

  const colors = getColors(todo.category);

  return (
    <View style={styles.tile}>
      <View style={{ alignSelf: "flex-start" }}>
        <Text
          style={{
            fontSize: 12,
            textTransform: "capitalize",
            color: colors.color,
            backgroundColor: colors.bg,
            paddingHorizontal: 6,
            paddingVertical: 2,
            borderRadius: 3,
            flex: 0,
          }}
        >
          {todo.category}
        </Text>
      </View>
      <Text style={styles.title}>{todo.title}</Text>
      <Text
        style={{
          fontSize: 12,
          color: "#807e7e",
        }}
      >
        Due Date : {formatDate(todo.date)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: "white",
    marginTop: 18,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
  },
});
