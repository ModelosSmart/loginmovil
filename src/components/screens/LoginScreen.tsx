import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type LoginScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Login">,
};

export function LoginScreen({ navigation }: LoginScreenProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email && password) {
            navigation.navigate("Dashboard");
        }
    };

    return (
        <stackLayout style={styles.container}>
            <stackLayout style={styles.content}>
                <image
                    src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
                    style={styles.logo}
                />

                <label style={styles.title}>Welcome Back</label>

                <stackLayout style={styles.formContainer}>
                    <stackLayout style={styles.inputContainer}>
                        <label style={styles.label}>Email Address</label>
                        <textField
                            style={styles.input}
                            hint="Enter your email"
                            keyboardType="email"
                            text={email}
                            onTextChange={(e) => setEmail(e.value)}
                        />
                    </stackLayout>

                    <stackLayout style={styles.inputContainer}>
                        <label style={styles.label}>Password</label>
                        <textField
                            style={styles.input}
                            hint="Enter your password"
                            secure={true}
                            text={password}
                            onTextChange={(e) => setPassword(e.value)}
                        />
                    </stackLayout>

                    <button
                        style={styles.loginButton}
                        onTap={handleLogin}
                    >
                        Sign In
                    </button>
                </stackLayout>
            </stackLayout>

            <button
                style={styles.registerLink}
                onTap={() => navigation.navigate("Register")}
            >
                Don't have an account? Sign Up
            </button>
        </stackLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        height: "100%"
    },
    content: {
        padding: 20,
        flex: 1,
        justifyContent: "center"
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
        color: "#333333"
    },
    formContainer: {
        padding: 16
    },
    inputContainer: {
        marginBottom: 16
    },
    label: {
        fontSize: 14,
        marginBottom: 8,
        color: "#666666"
    },
    input: {
        fontSize: 16,
        padding: 12,
        backgroundColor: "#f5f5f5",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#e0e0e0"
    },
    loginButton: {
        backgroundColor: "#4a90e2",
        color: "#ffffff",
        fontSize: 18,
        padding: 12,
        borderRadius: 8,
        textTransform: "none",
        marginTop: 20
    },
    registerLink: {
        fontSize: 16,
        color: "#4a90e2",
        textAlign: "center",
        padding: 16,
        backgroundColor: "transparent"
    }
});