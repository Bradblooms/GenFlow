import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PlusSvg from '../assets/PulsSvg'
import MinusSvg from '../assets/MinusSvg'
import { setWaterLevel } from "../app/waterLevel/waterLevelActions"
import { connect } from 'react-redux'
import SweepSelect from './SweepSelect'


const actions = {
    setWaterLevel
}

const mapState = state => ({
    mlSize: state.waterLevel.size
})




function ControlButtons({ setWaterLevel, waterLevelState, mlSize }) {

    const handleSetWaterLevel = (operation) => {

        if (operation === "plus") {

            const total = waterLevelState + (mlSize / 1000)

            setWaterLevel(total)
        }
        if (operation === "minus") {
            const total = waterLevelState - (mlSize / 1000)

            if (total > 0) {
                setWaterLevel(total)
            }

            if (waterLevelState <= (mlSize / 1000)) {
                setWaterLevel(0)
            }

        }

    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <SweepSelect />
            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity onPress={() => handleSetWaterLevel("minus")}>
                    <View style={styles.Buttons}>
                        <MinusSvg />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleSetWaterLevel("plus")} >
                    <View style={styles.Buttons}>
                        <PlusSvg />
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    )
}


export default connect(mapState, actions)(ControlButtons)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    ButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

    },
    Buttons: {
        padding: 10
    },
    headingText: {
        fontSize: 40,
        fontWeight: '800',
        color: 'white'
    },
    subHeadingText: {
        fontSize: 20,
        color: 'white'
    },
    sweepingOptionText: {
        fontSize: 25,
        fontWeight: '800',
        color: 'white'
    }


});
