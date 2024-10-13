import { Modal, View, StyleSheet } from "react-native";
import TodoForm from "./TodoForm";

export default function AddTodoModal({ handleModalClose, modal, onAdd }) {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modal}
      onRequestClose={handleModalClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TodoForm onClose={handleModalClose} onAdd={onAdd} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalContent: {
    backgroundColor: "white",
    height: "60%",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    alignItems: "center",
  },
});
