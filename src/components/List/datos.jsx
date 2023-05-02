import {Text, View , FlatList, Button, Modal, TouchableOpacity } from 'react-native'
import React,  {useState} from 'react'
import Style from "./style"

const Datos = ({datos, setData}) => {
const [ModalVisibility, setModalVisibility] = useState(false)
const [ItemSelected, setItemselected] = useState({})


const setModalItem = item => {
    setItemselected(item)
    setModalVisibility(true)
}



 const deleteItem = item => {
    setData(prevstate => prevstate.filter(Element => Element.name   !== item.name))    
    setModalVisibility(false)
}


const itemComprado = (item) => {
    item.Comprado = true
}




const renderItem = ({item}) =>(
    <View>
        <Text>{item.name}</Text>
        <Button title='Borar' onPress={()=>setModalItem(item)}></Button>
        <TouchableOpacity>
        <Text Style ={Style.ButtonStyle}>Comprado</Text>
        </TouchableOpacity>
        <View style ={Style.ModalContainer}>
        <Modal visible = {ModalVisibility} animationType="fade" transparent ={false}  >
            <Text>Eliminar Item</Text>
        <View>
            <Text>Estas Seguro que deseas borrar este elemento? {item.name}</Text>
        </View>
        <View>
            <Button title='Eliminar' color={"red"} onPress={()=>deleteItem(ItemSelected)}></Button>
            <Button title="No" color={"green"} onPress={ ()=>setModalVisibility(false)}></Button>
        </View>
        </Modal>
       </View>
       
    </View>
)

  return (
    <View>
 <FlatList data={datos} renderItem={renderItem} keyExtractor={item => item.id}></FlatList>
    </View>
  )
}

export default Datos