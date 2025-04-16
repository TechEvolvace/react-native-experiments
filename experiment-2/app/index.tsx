// Home page (also the landing page for this app)
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
          <Link href="/insights" asChild>
            <Button title="Insights" />
          </Link>
      </View>

      <Text>This is the landing page of the React Native app for Experiment 2!</Text>
    </View>
  );
}
