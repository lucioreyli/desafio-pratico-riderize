import React from "react";
import { View } from "react-native";
import { BottomNavBarButtons } from "../BottomNavBarButtons";
import { styles } from "./styles";

export const BottomNavbar: React.FC = ({ children }) => {
  return (
    <View style={styles.navbar}>
      <BottomNavBarButtons />
      {
        children
      }
    </View>
  )
}