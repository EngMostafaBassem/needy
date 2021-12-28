import React from 'react'
import {View, TextInput,StyleSheet } from 'react-native'
import colorSchema from '../../configs/color'
import Ionicons from 'react-native-vector-icons/Ionicons'
const AppField=({iconText,width='100%',...props})=>{
    return(
        <View style={[styles.container,{width}]}>
            {iconText&&(<Ionicons width={30} height={30} name={iconText} color='gray' size={25} />)}
            <TextInput 
              style={styles.textField}
              autoComplete={false}
              autoCorrect={false}  
               {...props}
            />
        </View>
    )

}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colorSchema.medium,
        height:60,
        borderRadius:13,
        paddingLeft:10,
    },
    textField:{
        width: '100%', 
        color:'gray',
        fontSize:18,
        paddingLeft:2
       
    },
   

})
export default  AppField