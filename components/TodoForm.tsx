import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function TodoForm({ onClose, onAdd }) {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleAddTodo = () => {
    const todo = {
      id: Math.random(),
      title: title,
      category: category,
      date: date,
    };
    onAdd(todo);
    setShow(false);
  };

  return (
    <View style={styles.addTodoContainer}>
      <View style={styles.formHeader}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Create New Task</Text>
        <TouchableOpacity
          style={styles.closeBtn}
          activeOpacity={0.7}
          onPress={onClose}
        >
          <Icon name="close-outline" size={18} />
        </TouchableOpacity>
      </View>
      <View style={styles.formBody}>
        <Text style={styles.inputLabel}>Title</Text>
        <TextInput
          style={styles.input}
          keyboardType="default"
          value={title}
          onChangeText={(value) => {
            setTitle(value);
          }}
        />
        <Text style={styles.inputLabel}>Category</Text>
        <Dropdown
          style={styles.dropDown}
          data={[
            { label: "Hobby", value: "hobby" },
            { label: "Work", value: "work" },
            { label: "Personal", value: "personal" },
          ]}
          labelField="label"
          valueField="value"
          placeholder="Choose Category"
          value={category}
          onChange={(item) => {
            setCategory(item.value);
          }}
        />

        <Text style={styles.inputLabel}>Due Date</Text>
        <TouchableOpacity
          style={styles.dropDown}
          onPress={showDatepicker}
          activeOpacity={0.7}
        >
          <Text style={{ fontSize: 16 }}>
            {date ? date.toDateString() : "Please Pick a Date"}
          </Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
        <TouchableOpacity style={styles.btn} onPress={handleAddTodo}>
          <Text style={styles.btnText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addTodoContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    height: "80%",
    paddingHorizontal: 8,
  },
  formHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeBtn: {
    backgroundColor: "#ddd",
    padding: 4,
    borderRadius: 100,
  },
  formBody: {
    marginTop: 16,
  },
  inputLabel: {
    fontSize: 16,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    marginVertical: 4,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  dropDown: {
    borderWidth: 1,
    paddingVertical: 13,
    borderRadius: 10,
    marginVertical: 6,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  btn: {
    backgroundColor: "#d1760f",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 12,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
