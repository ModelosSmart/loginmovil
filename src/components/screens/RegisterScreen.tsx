import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type RegisterScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Register">,
};

export function RegisterScreen({ navigation }: RegisterScreenProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleRegister = () => {
        if (email && password && name) {
            navigation.navigate("Login");
        }
    };

    return (
        <stackLayout style={styles.container}>
            <stackLayout style={styles.content}>
                <image
                    src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                    style={styles.logo}
                />

                <label style={styles.title}>Create Account</label>

                <stackLayout style={styles.formContainer}>
                    <stackLayout style={styles.inputContainer}>
                        <label style={styles.label}>Full Name</label>
                        <textField
                            style={styles.input}
                            hint="Dame tu nombre"
                            text={name}
                            onTextChange={(e) => setName(e.value)}
                        />
                    </stackLayout>

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
                            hint="Choose a password"
                            secure={true}
                            text={password}
                            onTextChange={(e) => setPassword(e.value)}
                        />
                    </stackLayout>

                    <button
                        style={styles.registerButton}
                        onTap={handleRegister}
                    >
                        Create Account
                    </button>
                </stackLayout>
            </stackLayout>

            <button
                style={styles.loginLink}
                onTap={() => navigation.navigate("Login")}
            >
                Already have an account? Sign In
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
    registerButton: {
        backgroundColor: "#7c4dff",
        color: "#ffffff",
        fontSize: 18,
        padding: 12,
        borderRadius: 8,
        textTransform: "none",
        marginTop: 20
    },
    loginLink: {
        fontSize: 16,
        color: "#7c4dff",
        textAlign: "center",
        padding: 16,
        backgroundColor: "transparent"
    }
});