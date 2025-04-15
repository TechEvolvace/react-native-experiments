// Insights page
import { Text, View, Button } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        {/* Navigation Buttons */}
        <View style={{flexDirection: "row"}}>
            <Link href="/" asChild>
                <Button title="Home" />
            </Link>
            <Link href="/about" asChild>
                <Button title="About" />
            </Link>
        </View>

        {/* Insights page content */}
        <Text>Welcome to the Insights page!</Text>
        <Text>This page is where I record my findings when developing this app for this Experiment!</Text>
    </View>
  );
}