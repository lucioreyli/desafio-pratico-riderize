import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 25,
    paddingTop: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 32,
    color: colors.icon,
  },
  button: {
    padding: 0,
  }
})