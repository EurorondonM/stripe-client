import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StripeApp from "./src/StripeApp";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
  return (
    <StripeProvider publishableKey="pk_test_51ODTD4AWKgvi1dxbq0OKvsNQ8sy3BNYaDpGVp5iG989uCGAkHhs5UPf5B6SLfmNONAwBvr6qZOEPnXGUIjskbbbC002UTbBwXt">
      <StripeApp />
    </StripeProvider>
  );
}
