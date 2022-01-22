import {
  Alert,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { GPSLocationIcon } from "~/Icons/GPSLocationIcon";
import { LayerIcon } from "~/Icons/LayerIcon";
import { getSensor } from "~/services/getSensor";
import { dimensions } from "~/constants/dimensions";

export const MapButtons: React.FC<{
  modalOpened: boolean,
  handleGetLocation: () => void
  handleChangeMapType: () => void
}> = ({
  modalOpened,
  handleGetLocation,
  handleChangeMapType
}) => {



    return (
      <View style={[
        styles.container,
        modalOpened && {
          bottom: (dimensions.height / 2.05) + 15
        }
      ]}>
        <TouchableOpacity
          style={[styles.button, { marginBottom: 10 }]}
          onPress={handleChangeMapType}
        >
          <LayerIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleGetLocation}
        >
          <GPSLocationIcon />
        </TouchableOpacity>
      </View>
    )
  }