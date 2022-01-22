import { StyleSheet } from "react-native";
import { colors } from "@styles/colors";
import { fonts } from "~/styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    height: 48,
    borderRadius: 100,
    width: '100%',
    borderColor: colors.cancelButton,
    borderWidth: 1,
    bottom: 0,
    top: 0,
  },

  text: {
    fontSize: 16,
    fontFamily: fonts.button,
    color: colors.cancelButton,
  },
})