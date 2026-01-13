import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Hr,
    Link,
    Img,
} from "@react-email/components";
import * as React from "react";

interface LoginAlertEmailProps {
    userEmail: string;
    loginTime: string;
    ipAddress: string;
    device: string;
}

export default function LoginAlertEmail({
    userEmail = "user@example.com",
    loginTime,
    ipAddress,
    device,
}: LoginAlertEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New login detected on your account</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>New Login Alert</Heading>
                    <Text style={text}>
                        We detected a new login to your account <strong>{userEmail}</strong>.
                    </Text>

                    <Section style={section}>
                        <Text style={infoText}>
                            <strong>Time:</strong> {loginTime}
                        </Text>
                        <Text style={infoText}>
                            <strong>Device:</strong> {device}
                        </Text>
                        <Text style={infoText}>
                            <strong>IP Address:</strong> {ipAddress}
                        </Text>
                    </Section>

                    <Text style={text}>
                        If this was you, you can safely ignore this email.
                    </Text>
                    <Text style={warningText}>
                        If you did not log in, please reset your password immediately to secure your account.
                    </Text>

                    <Hr style={hr} />

                    <Text style={footer}>
                        CP Zero To Hero Security Team
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
};

const h1 = {
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center" as const,
    margin: "30px 0",
    padding: "0",
};

const text = {
    color: "#333",
    fontSize: "16px",
    lineHeight: "26px",
    textAlign: "left" as const,
    margin: "0 24px",
};

const section = {
    padding: "24px",
    border: "1px solid #e6ebf1",
    borderRadius: "5px",
    margin: "24px",
    backgroundColor: "#fcfcfc",
};

const infoText = {
    color: "#333",
    fontSize: "14px",
    lineHeight: "24px",
    margin: "0",
};

const warningText = {
    color: "#d93025",
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "bold",
    textAlign: "left" as const,
    margin: "24px",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: "center" as const,
};
