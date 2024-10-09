import { Modal, Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function AddTodoModal({ handleModalClose, modal }) {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modal}
      onRequestClose={handleModalClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={{ color: "white" }}>Hello From the Modal</Text>
          <TouchableOpacity onPress={handleModalClose}>
            <Text style={{ color: "red", marginTop: 10 }}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalContent: {
    backgroundColor: "white",
    height: "70%",
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
