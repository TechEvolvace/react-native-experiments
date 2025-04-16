// About page
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

      {/* About page content */}
      <Text>Welcome to the About page! I will tell you about the purpose behind this app in this Experiment here!</Text>
    </View>
  );
}