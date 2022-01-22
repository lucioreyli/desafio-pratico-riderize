import { StyleSheet } from "react-native";
import { colors } from "@styles/colors";
import { fonts } from "~/styles/fonts";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.actionButton,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    height: 48,
    borderRadius: 100,
    width: '100%',
  },

  text: {
    fontSize: RFValue(16),
    fontFamily: fonts.button,
    color: colors.background,
  },
  icon: {
    fontSize: RFValue(24, 720),
    color: colors.background
  },
})