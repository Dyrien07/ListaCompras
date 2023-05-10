import { View, Text } from 'react-native'
import React from 'react'
import styles from "./style"
import List from '../List'

const ListContainer = () => {
  return (
    <View style={styles.ListContainer}>
      <Text style={styles.ListContainer}> Lista de Compras</Text>
      <List style></List>
    </View>
  )
}

export default ListContainer