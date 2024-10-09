import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddTodoModal from "./components/AddTodoModal";

export default function App() {
  const [modal, setModal] = useState(false);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
    </SafeAreaView>
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
    backgroundColor: "#d1760f",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  btnText: {
    fontSize: 28,
    color: "white",
  },
});
