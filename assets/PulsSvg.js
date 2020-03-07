import * as React from "react"
import Svg, { Path, G, Circle } from "react-native-svg"

function SvgComponent() {
    return (
        <Svg width="60" height="60" viewBox="0 0 60 60">
            <Path
                d="M39.195 27.569h-7.11V20.46a1.105 1.105 0 00-1.105-1.105h-2.432a1.1 1.1 0 00-1.105 1.105v7.109h-7.109a1.105 1.105 0 00-1.105 1.105v2.431a1.105 1.105 0 001.105 1.105h7.109v7.112a1.1 1.1 0 001.105 1.1h2.431a1.105 1.105 0 001.106-1.1v-7.111h7.11a1.105 1.105 0 001.1-1.105v-2.431a1.105 1.105 0 00-1.1-1.106z"
                fill="#fff"
            />
            <G stroke="#fff" strokeWidth={4} fill="none">
                <Circle cx={30} cy={30} r={30} stroke="none" />
                <Circle cx={30} cy={30} r={28} />
            </G>
        </Svg>
    )
}

export default SvgComponent


