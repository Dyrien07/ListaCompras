
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
        color: "white"
    },
    ContainerListData: {
        flexDirection: "row",
    
},
ModalContainer: { 
    flex: 1,
    justifyContent : "center",
    alignItems: "center",
},
ButtonStyle :{
    backgroundColor : "red"
}

});
export default styles;