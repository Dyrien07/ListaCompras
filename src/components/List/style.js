
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputText: {
        height: 50, 
        margin: 10,
        borderBottomWidth:1,
        borderBottomColor: "white",
        padding: 10,
        fontSize: 20,  
    },
    container:{
        flexDirection : "row"
    },
    button:{
        alignItems :"center",
        padding: 20,
        backgroundColor: "#85C1E9",
        width: 200,
        borderRadius: 20,
        marginBottom: 10,
        shadowColor:"black",
        alignSelf: "center",
        elevation: 10
    },
    textButton: {
        alignItems: "center",
        color: "white",
    },
    ContainerListData: {
        flexDirection: "row",
    
},
ModalContainer: { 
    flex: 1,
    justifyContent : "center",
    alignItems: "center",
},
ButtonStyleOff :{
    alignItems : "center",
    justifyContent: "flex-end",
    backgroundColor : "#165E8E",
    height:40,
    padding: 10,
    margin: 10,
    borderRadius: 10
},
textButtonList:{
    color: "black",
},
renderItem:{
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-evenly",
    borderColor: "black",
    margin: 10,
    elevation : 1,
    width : 350,
    height: 100
},
ItemStyle: {
    height: 50, 
    margin: 10,
    padding: 10,
    fontSize: 20,  
},

ButtonStyleOn :{
    backgroundColor : "#0F7C35",
    height:40,
    padding: 10,
    margin: 10,
    borderRadius:10 
},
BotonBorrar:{
    backgroundColor : "#932A0E",
    height : 40,
    padding : 10,
    margin: 5,
    borderRadius: 10
}
});
export default styles;