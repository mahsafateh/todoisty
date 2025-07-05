import { Stack } from "expo-router";
import "../global.css";
import {store} from "../store";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Stack>
      <Provider store={store}>
      <Stack.Screen name="index" options={{ title: "TODO LIST" }} />
      </Provider>
    </Stack>
  
  );
}
