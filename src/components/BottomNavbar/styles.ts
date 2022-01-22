import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";

export const styles = StyleSheet.create({
  navbar: {
    height: '25%',
    alignSelf: 'flex-end',
    bottom: 0,
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: colors.background,
    paddingVertical: 10,
    maxHeight: 136,
  }
})