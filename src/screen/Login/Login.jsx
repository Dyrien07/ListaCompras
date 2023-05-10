import { View, Text, TextInput, TouchableWithoutFeedbackComponent, KeyboardAvoidingView, Keyboard, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from "../Login/style"



const Login = ({loginFuncion}) => {
const [username, setUsername] = useState("")
const [pass, setPass] = useState("")


function onChangeuserInput(e) {
  setUsername(e)

}
function onChangepasswordInput(e) {
  setPass(e)
}


  return (
    <View style={styles.loginContainer}>
      <TextInput style={styles.textInputLogin} placeholder='Usuario' value={username} onChangeText={onChangeuserInput}></TextInput>
      <TextInput style={styles.textInputLogin} placeholder="Clave"  secureTextEntry ={true} value={pass} onChangeText={onChangepasswordInput}></TextInput>
      <View>
          <TouchableOpacity style={styles.buttonLogin} onPress={()=>loginFuncion(username, pass)}>
            <Text style={styles.buttonLoginText} >Ingresar</Text>
          </TouchableOpacity>

      </View>
    </View>
  )
}

export default Login