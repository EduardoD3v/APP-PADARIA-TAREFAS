import { Dimensions, StyleSheet } from "react-native";

import { themas } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
      

    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'


    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        //backgroundColor:'green',
        paddingHorizontal:37

    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center'

    },
    text1:{
        fontWeight:'bold',
        color:'#FFF', 
    },
    logo:{
        width:150,
        height:150,
    },
    text:{
        fontWeight:'bold',
        marginTop:20,
        fontSize:22,
    },
    titleInput:{
        marginLeft:5,
        color:themas.colors.gray,
        marginTop:20
    },
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        backgroundColor:themas.colors.lightGray,
        borderColor:themas.colors.lightGray
    },
    input:{
        height:'100%',
        width:'90%',
        //backgroundColor:'red',
        borderRadius:40
    },
    button:{
      width:210,
      height:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:themas.colors.primary,
      borderRadius:40,
    },
    text2:{
        fontSize:16,
        color:themas.colors.gray 
    }
    
})