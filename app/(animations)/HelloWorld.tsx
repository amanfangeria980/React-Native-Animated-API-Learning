import { View, Animated, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
const HelloWorld = () => {
    const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];
    const moveBall = () => {
        Animated.timing(value, {
            toValue: { x: 100, y: 100 },
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };
    return (
        <View>
            <Animated.View style={value.getLayout()}>
                <View
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 100 / 2,
                        backgroundColor: "red",
                    }}
                ></View>
            </Animated.View>
            <TouchableOpacity onPress={moveBall}>
                <Text>Click to move the ball</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HelloWorld;
