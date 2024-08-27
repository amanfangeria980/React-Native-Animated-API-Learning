import { View, Animated, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
const HelloWorld = () => {
    // creating a animated value
    const leftValue = useState(new Animated.Value(0))[0];

    // setting the animated value
    const moveBall = () => {
        Animated.timing(leftValue, {
            toValue: 1000,
            duration: 1000,
            useNativeDriver: false,
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
                            marginLeft: leftValue,
                            marginBottom: 10,
                        },
                    ]}
                ></Animated.View>
                <TouchableOpacity onPress={moveBall}>
                    <Text>Move the ball</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HelloWorld;
