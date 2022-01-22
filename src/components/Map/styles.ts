import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { fonts } from "~/styles/fonts";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#CECECE',
    zIndex: 3,
  },
  map: {
  },
  text: {
    color: colors.heading,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fonts.subtitle,
  }
})