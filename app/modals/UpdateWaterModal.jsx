import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import { connect } from "react-redux";

import { closeModal } from "./modalActions";
import { setWaterTarget } from "../../app/waterLevel/waterLevelActions";

const actions = {
  closeModal,
  setWaterTarget
};

function UpdateWaterModal({ closeModal, setWaterTarget }) {
  const [waterTarget, setWaterTargetL] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const waterTargetLiter = waterTarget / 1000;

    if ((waterTargetLiter >= 0 && waterTargetLiter < 10) || error !== null) {
      setError(null);
      setWaterTarget(waterTargetLiter);
      closeModal();
    } else {
      setError("are you sure were drinking that much of water??!!");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.closeContainer}>
          <TouchableOpacity style={styles.button} onPress={() => closeModal()}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>UPDATE TARGET WATER</Text>
        <Text style={styles.text}>
          Please enter your new water target below:{" "}
        </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Water Target"
            value={waterTarget}
            onChangeText={text => setWaterTargetL(text)}
          />
        </View>
        <View style={styles.updateButtonContainer}>
          <TouchableOpacity style={styles.updateButton} onPress={handleSubmit}>
            <Text style={styles.updateButtonText}>
              {!error ? "UPDATE" : "JUST DO IT"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text>{error}</Text>
      </View>
    </View>
  );
}

export default connect(null, actions)(UpdateWaterModal);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    height: 100,
    width: "100%",
    backgroundColor: "#000000a1",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3
  },
  modalContainer: {
    width: "80%",
    height: 282,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,

    alignItems: "center"
  },
  closeContainer: {
    height: 60,
    alignSelf: "flex-end",
    textAlign: "right"
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
    color: "#53BFEF"
  },
  textInputContainer: {
    flex: 1,
    marginBottom: 20
  },
  textInput: {
    width: 198,
    height: 50,
    fontSize: 20,
    paddingLeft: 15,
    justifyContent: "center",
    borderColor: "#53BFEF",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    borderRadius: 9
  },
  text: {
    flex: 1,
    width: 160,
    textAlign: "center",
    color: "#53BFEF"
  },
  updateButtonContainer: {
    flex: 1,
    marginBottom: 20
  },
  updateButton: {
    width: 198,
    height: 50,
    backgroundColor: "#53BFEF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9
  },
  updateButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "white"
  },
  button: {
    padding: 20
  }
});
