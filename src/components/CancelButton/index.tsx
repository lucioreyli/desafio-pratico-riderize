import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { CancelButtonProps } from "./CancelButtonProps"
import { styles } from "./styles"

export const CancelButton = ({ title, ...rest }: CancelButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}