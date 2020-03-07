import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Header from "../Components/Header"
import HumanBody from "../Components/HumanBody"
import ControlButtons from "../Components/ControlButtons"
import HumanBodySection from '../Components/HumanBodySection'
import { connect } from 'react-redux'

import { getWaterLevel } from '../app/waterLevel/waterLevelActions'

const { height } = Dimensions.get("window");
const actions = {
    getWaterLevel
}

const mapState = state => ({
    waterLevel: state.waterLevel.waterLevel
})

function WhaterLevel({ getWaterLevel, waterLevel }) {

    const [waterLevelState, setWaterLevelState] = useState(0)
    useEffect(() => {
        // get waterLevel from Data base   
        const wlevel = async () => {
            await getWaterLevel()
        }
        wlevel()
    }, [])

    useEffect(() => {
        if (waterLevel !== '') {
            setWaterLevelState(waterLevel)
        } else {
            setWaterLevelState(0)
        }
    }, [waterLevel])

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Header waterLevelState={waterLevelState} />
            </View>
            <View style={styles.body}>
                <HumanBodySection waterLevelState={waterLevelState} />
            </View>

            <View style={styles.controllButtons}>
                <ControlButtons waterLevelState={waterLevelState} />
            </View>
        </View>
    )
}


export default connect(mapState, actions)(WhaterLevel)

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {

        height: height / 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    controllButtons: {
        height: height / 4,

    }
});