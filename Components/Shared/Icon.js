import React from 'react'
import { View,StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Icon=({width,height,iconName,bgColor})=>{
 return(
     <View style={[styles.container,{width,height,borderRadius:width/2,backgroundColor:bgColor}]}>
         <Ionicons color='white' size={30} name={iconName}/>
     </View>
 )
}
const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Icon