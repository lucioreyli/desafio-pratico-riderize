import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { ArrowBackIcon } from "~/Icons/ArrowBackIcon"
import { SettingsIcon } from "~/Icons/SettingsIcon"
import { styles } from "./styles"

export const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ArrowBackIcon />
      </TouchableOpacity>

      <Text style={styles.pageTitle}>
        {title}
      </Text>

      <TouchableOpacity>
        <SettingsIcon />
      </TouchableOpacity>
    </View>
  )
}