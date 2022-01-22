import { Dimensions } from "react-native";

interface DimensionsType {
  height: number,
  width: number,
}

export const dimensions: DimensionsType = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
}