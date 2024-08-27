import { View, Animated, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
const HelloWorld = () => {
    // creating a animated value
    const leftValue = useState(new Animated.Value(1))[0];

    // setting the animated value
    const fadeOutBall = () => {
        Animated.timing(leftValue, {
            toValue: 0,
            duration: 4000,
            useNativeDriver: true,
        }).start();
    };
    const fadeInBall = () => {
        Animated.timing(leftValue, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true,
        }).start();

        setTimeout(() => {
            for (let i = 0; i < 500000000000; i++) {}
        }, 1000);
    };
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Animated.View
                    style={[
                        {
                            width: 100,
                            height: 100,
                            borderRadius: 100 / 2,
                            backgroundColor: "red",
                            // binding the animated value
                            opacity: leftValue,
                            marginBottom: 10,
                        },
                    ]}
                ></Animated.View>
                <TouchableOpacity onPress={fadeOutBall}>
                    <Text>Fade out the ball</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={fadeInBall}>
                    <Text>Fade in the ball</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HelloWorld;
