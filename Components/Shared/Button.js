import React from 'react'
import { TouchableOpacity ,Text,StyleSheet} from 'react-native'

const Button=({title,bgColor,...props})=>{
    return(
        <TouchableOpacity style={[styles.btnContainer,{backgroundColor:bgColor}]} {...props}>
           <Text style={styles.textBtn}>{title}</Text>
        </TouchableOpacity>

    )

}
const styles=StyleSheet.create({
    btnContainer:{
        width: '100%',
        height: 60,
        marginBottom:6,
        borderRadius:13,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    }
    ,
    textBtn:{
        fontSize:18,
        textTransform:'uppercase',
        color:'white',
        fontWeight:'700'
    }
})
export default Button