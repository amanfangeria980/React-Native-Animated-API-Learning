import { View, Animated, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
// import "./global.css";

interface Item {
    id: string;
    title: string;
    path: string;
}

const items: Item[] = [
    {
        id: "1",
        title: "1. Hello World",
        path: "/HelloWorld",
    },
];

const index = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
            {items.map((item) => (
                <TouchableOpacity
                    onPress={() => router.push(item.path)}
                    key={item.id}
                    style={{
                        width: "90%",
                        borderRadius: 10,
                        borderColor: "red",
                        borderWidth: 2,
                        padding: 20,
                    }}
                >
                    <Text
                        style={{
                            color: "red",
                            fontSize: 20,
                            textAlign: "center",
                        }}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default index;
