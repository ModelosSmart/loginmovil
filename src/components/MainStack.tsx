import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { LoginScreen } from "./screens/LoginScreen";
import { RegisterScreen } from "./screens/RegisterScreen";
import { DashboardScreen } from "./screens/DashboardScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}
        >
            <StackNavigator.Screen
                name="Login"
                component={LoginScreen}
            />
            <StackNavigator.Screen
                name="Register"
                component={RegisterScreen}
            />
            <StackNavigator.Screen
                name="Dashboard"
                component={DashboardScreen}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);