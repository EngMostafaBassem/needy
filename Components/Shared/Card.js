import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import colorSchema from '../../configs/color'
const Card=({title,subtitle,image})=>{
    return(
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.imageStyle} resizeMode='cover' />
            <View style={styles.cardContent}>
               <Text style={styles.cardTitle} >{title}</Text>
               <Text style={styles.cardSubtitle}>{subtitle}</Text>   
            </View> 
            

        </View>
    )

}
const styles=StyleSheet.create({
    cardContainer:{
        backgroundColor:'#fff',
        borderRadius:10,
        overflow:'hidden',
        marginVertical:10
        
    },
    imageStyle:{
        width: '100%',
        height: 300
    },
    cardContent:{
        padding: 20

    },
    cardTitle:{
        fontWeight:'700',
        fontSize:20,
        marginBottom:5
    },
    cardSubtitle:{
        fontSize:18,
        color:colorSchema.seconday,
        fontWeight:'700'
    }
})
export default Card