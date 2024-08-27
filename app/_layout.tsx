import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" />
        </Stack>
    );
};

export default _layout;
