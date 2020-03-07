import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { connect } from "react-redux";
import { setSize } from "../app/waterLevel/waterLevelActions";

const { width: totalWidth } = Dimensions.get("window");
const count = 3;
const width = totalWidth / count;
const height = width;

const actions = {
  setSize
};

function SweepSelect({ setSize }) {
  const handleSizeSelect = slideIndex => {
    let size;

    switch (slideIndex) {
      case 0:
        size = 150;
        break;
      case 1:
        size = 250;
        break;
      case 2:
        size = 350;
        break;
    }
    setSize(size);
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.sweepingOptionText}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={["150ml", "250 ml", "350 ml"]}
        renderItem={_renderItem}
        sliderWidth={totalWidth}
        itemWidth={width}
        itemHeight={200}
        onSnapToItem={slideIndex => handleSizeSelect(slideIndex)}
      />
    </View>
  );
}

export default connect(null, actions)(SweepSelect);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: totalWidth,
    justifyContent: "center",
    alignItems: "center"
  },

  ButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  Buttons: {
    padding: 10
  },
  headingText: {
    fontSize: 40,
    fontWeight: "800",
    color: "white"
  },
  subHeadingText: {
    fontSize: 20,
    color: "white"
  },
  sweepingOptionText: {
    fontSize: 25,
    fontWeight: "800",
    color: "white",
    paddingRight: 10,
    paddingLeft: 25,
    justifyContent: "center",
    alignItems: "center"
  }
});
