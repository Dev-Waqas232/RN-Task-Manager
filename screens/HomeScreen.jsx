import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AddTodoModal from "../components/AddTodoModal";

export default function HomeScreen() {
  const [modal, setModal] = useState(false);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#d1760f" }}>
      <Text>Let's Work!</Text>

      <AddTodoModal modal={modal} handleModalClose={handleModalClose} />
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={handleModalOpen}
      >
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  btnText: {
    fontSize: 28,
    color: "white",
    color: "#d1760f",
  },
});
