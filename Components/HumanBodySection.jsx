import React, { useEffect } from "react";
import HumanBody from "./HumanBody";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextComponent
} from "react-native";
import EditSvg from "../assets/EditSvg";
import { connect } from "react-redux";
import { openModal } from "../app/modals/modalActions";
import { getWaterTarget } from "../app/waterLevel/waterLevelActions";

const actions = { openModal, getWaterTarget };

const mapState = state => ({
  watterTarget: state.waterLevel.watterTarget
});

function HumanBodySection({
  waterLevelState,
  openModal,
  watterTarget,
  getWaterTarget
}) {
  useEffect(() => {
    const getTarget = async () => {
      await getWaterTarget();
    };

    getTarget();
  }, []);

  return (
    <View>
      <View style={styles.topLevelEdit}>
        <View style={styles.dottedLine} />

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => openModal("UpdateWaterModal")}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.textStyle}>
              {parseFloat(watterTarget).toFixed(1)} L
            </Text>
            <EditSvg />
          </View>
        </TouchableOpacity>
      </View>
      <HumanBody
        waterLevelState={waterLevelState}
        watterTarget={watterTarget}
      />
    </View>
  );
}

export default connect(mapState, actions)(HumanBodySection);

const styles = StyleSheet.create({
  contianer: {
    flex: 1
  },
  topLevelEdit: {
    zIndex: 10,
    position: "absolute",
    top: -173,
    left: 0,
    flex: 1,
    flexDirection: "row"
  },
  dottedLine: {
    height: 10,
    width: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#088ECF",
    borderStyle: "solid",
    borderRadius: 0.5
  },
  textStyle: {
    color: "white",
    paddingRight: 10
  },
  editButton: {
    paddingLeft: 10
  }
});
