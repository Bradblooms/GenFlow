import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


function Header({ waterLevelState }) {
    return (
        <View style={styles.infoTabsContainer}>
            <View style={styles.infoTabItem}>
                <Text style={styles.headingText} t>{parseFloat(waterLevelState).toFixed(2)} L</Text>
                <Text style={styles.subHeadingText}>TOTAL WATER </Text>
                <Text style={styles.subHeadingText}>DRUNK</Text>
            </View>
            <View style={styles.infoTabItem} >
                <Text style={styles.headingText}>15</Text>
                <Text style={styles.subHeadingText}>ACHIEVED GOAL </Text>
                <Text style={styles.subHeadingText}>DAYS</Text>
            </View>
        </View>
    )
}


export default Header

const styles = StyleSheet.create({

    infoTabsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    infoTabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    headingText: {
        fontSize: 40,
        fontWeight: '800',
        color: 'white'
    },
    subHeadingText: {
        fontSize: 20,
        color: 'white'
    }


});