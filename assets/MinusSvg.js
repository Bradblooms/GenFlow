import React from "react";
import Svg, { G, Path, Defs, Circle, Rect } from "react-native-svg";
import { View } from "react-native";

function PlusSvg() {
    return (
        <View

        >
            <Svg width={60} height={60} viewBox="0 0 60 60">
                <G transform="translate(-76 -711)">
                    <G
                        transform="translate(76 711)"
                        stroke="#fff"
                        strokeWidth={4}
                        fill="none"
                    >
                        <Circle cx={30} cy={30} r={30} stroke="none" />
                        <Circle cx={30} cy={30} r={28} />
                    </G>
                    <Rect
                        width={22}
                        height={6}
                        rx={1}
                        transform="translate(95 738)"
                        fill="#fff"
                    />
                </G>
            </Svg>
        </View>
    );
}

export default PlusSvg;


