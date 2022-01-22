import React from "react"
import { Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { colors } from "~/styles/colors"
import { ActionButtonProps } from "./ActionButtonProps"
import { styles } from "./styles"

export const ActionButton = ({ title, ...rest }: ActionButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{title}</Text>
      <Icon name="arrow-forward-sharp" style={styles.icon} color={colors.heading} />
    </TouchableOpacity>
  )
}