//styles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf:'stretch',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        },
        input:{
            height:40,
            width:300,
            borderRadius:9,
        },
        box:{
            textAlign:'center',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#8F8F8F',
            width:'80%',
            height:200,
            borderRadius:10,
            marginTop:15,
            shadowOffset:{
                width:10,
                height:10,
            }
        },
        btn:{
            marginTop:10,
            height:40,
            width:200,
            borderRadius:18,
            backgroundColor:'#181515'
        },
        texto:{
            textAlign:'center',
            fontWeight:'bold',
            fontSize:25,
        },
})