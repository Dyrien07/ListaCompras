
import {  View , StyleSheet, Text } from 'react-native';
import ListContainer from './src/components/ListContainer';
import Login from './src/screen/Login/Login';
import { useState } from 'react';
import {useFonts} from "expo-font"

export default function App() {
  const [Loaded] = useFonts({
    "IBMPlexMono-Bold": require("./src/assets/font/IBMPlexMono-Bold.ttf")
  })
const [loginStatus, setLoginStatus] = useState(false) 

  function LoginState(userName, password) {
    if (userName && password ==="Admin") {
       setLoginStatus(true);
  }else{
    alert("Credenciales inocrrectas")
  }

  if(!Loaded){
    return null;
  }

}
  return (
    <View style= {style.appContainer} >
   {loginStatus === false ? <Login loginFuncion={LoginState}></Login> : <ListContainer></ListContainer> } 
    </View>
  );

} 


const style = StyleSheet.create({
  appContainer: {
    flex:1,
    backgroundColor :"#D4E6F1",
  },
  tituloStyle: {
    flex:1,
    fontFamily: "IBMPlexMono-Bold"
  },
})

