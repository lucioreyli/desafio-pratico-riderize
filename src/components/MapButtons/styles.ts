import { StyleSheet } from "react-native";
import { colors } from "~/styles/colors";

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 150,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingRight: 15,
    zIndex: 999,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: colors.background,
    padding: 20,
    width: 32,
    height: 32,
  }
})