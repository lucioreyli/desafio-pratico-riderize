import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "~/styles/colors";
import { fonts } from "~/styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '8%',
    width: '100%',
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  pageTitle: {
    fontSize: RFValue(20),
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  iconContainer: {
    backgroundColor: colors.background
  },
  icon: {
    fontSize: 24,
    color: colors.icon
  },
})