import React from "react"
import { TouchableOpacity, View } from "react-native"
import { DirectionsBikeIcon } from "~/Icons/DirectionsBikeIcon"
import { MonitorWeightIcon } from "~/Icons/MonitorWeightIcon"
import { RouteIcon } from "~/Icons/RouteIcon"
import { TerrainIcon } from "~/Icons/TerrainIcon"
import { styles } from "./styles"

export const BottomNavBarButtons: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <RouteIcon />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <DirectionsBikeIcon />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <TerrainIcon />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <MonitorWeightIcon />
      </TouchableOpacity>
    </View>
  )
}