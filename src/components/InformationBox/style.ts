import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";
import { fonts } from "~/styles/fonts";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  informationContainer: {
    flexDirection: 'row',
  },
  informationBox: {
    padding: '7%',
  },
  subtitle: {
    color: colors.heading,
    fontFamily: fonts.subtitle,
    textAlign: 'center',
    fontSize: RFValue(18),
    marginBottom: '2.5%',
  },
  informationText: {
    color: colors.heading,
    fontFamily: fonts.information,
    textAlign: 'center',
    fontSize: RFValue(32),
    paddingBottom: '2.5%',
  },
})