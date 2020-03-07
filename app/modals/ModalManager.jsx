import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import UpdateWaterModal from "./UpdateWaterModal";

const modalLookup = {
  UpdateWaterModal
};

const mapState = state => ({
  currentModal: state.modals
});

const ModalManager = ({ currentModal }) => {
  let renderModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderModal = <ModalComponent {...modalProps} />;
  }

  return (
    <View style={renderModal !== undefined && styles.container}>
      {renderModal}
    </View>
  );
};

export default connect(mapState)(ModalManager);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 4,
    elevation: 5
  }
});
