
import {  View , StyleSheet } from 'react-native';
import ListContainer from './src/components/ListContainer';

export default function App() {
  return (
    <View style= {style.appContainer} >
     <ListContainer></ListContainer>
   
    </View>
  );
} 


const style = StyleSheet.create({
  appContainer: {
    flex:1,
    backgroundColor :"#D4E6F1",
   
  },
})

