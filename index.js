import { AppRegistry } from "react-native";
import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import { name as appName } from "./app.json";
import App from "./src/App";
enableScreens();

AppRegistry.registerComponent(appName, () => App);
