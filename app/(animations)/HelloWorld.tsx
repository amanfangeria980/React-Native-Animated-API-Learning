import { View, Animated, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
const HelloWorld = () => {
    // creating a animated value
    const leftValue = useState(new Animated.Value(0))[0];

    // setting the animated value
    const fadeOutBall = () => {
        Animated.timing(leftValue, {
            toValue: 500,
            duration: 4000,
            useNativeDriver: true,
        }).start();
    };
    const fadeInBall = () => {
        Animated.timing(leftValue, {
            toValue: -500,
            duration: 4000,
            useNativeDriver: true,
        }).start();
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
                            transform: [{ translateX: leftValue }],
                            marginBottom: 10,
                        },
                    ]}
                ></Animated.View>
                <TouchableOpacity onPress={fadeOutBall}>
                    <Text>Move here</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={fadeInBall}>
                    <Text>Move there</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HelloWorld;
