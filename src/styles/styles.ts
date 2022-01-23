import { StyleSheet } from "react-native";
import { dimensions } from "~/constants/dimensions";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },

  modalStyle: {
    height: (dimensions.height / 2.05),
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    zIndex: 4,
  },

  handleStyle: {
    backgroundColor: colors.heading,
    width: '25%',
    height: 3,
  }

});
