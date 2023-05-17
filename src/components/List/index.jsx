import { View, Text, TextInput, TouchableOpacity, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import style from "./style"
import Datos from './datos'


const List = () => {
const [item, setItem] = useState("")
const [data, setData] = useState([])


const onChangeText = text => {
  setItem(text)
}

const addItem = () => {
setData([...data, {name : item, id: Math.random().toString(), Comprado : false }] )
 setItem("")
 
}




  return (
    <View >
       <TextInput  onChangeText={onChangeText}  value={item} style={style.inputText} placeholder='Ingrese Item' />
       <TouchableOpacity  style ={style.button}>
        <Text style={style.textButton} onPress={addItem} >Agregar Item</Text>
       </TouchableOpacity>
       <View style ={style.ContainerListData}>
        <Datos datos={data} setData={setData}/>
       </View>
      
    </View>

    
  )
}

export default List