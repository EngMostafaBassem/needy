import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

const ListItem=({title,subtitle,image,IconImage,...props})=>{
    return(
        <View style={[styles.listContiner,props.style]}>
          {IconImage}
          {
              image&&(<Image source={image} resizeMode='cover' style={styles.image}/>)
          }   
           <View style={styles.listContent}>
               <Text style={styles.title}>{title}</Text>
                {
                  subtitle&&( <Text style={styles.subtitle}>{subtitle}</Text>)
                }
              
           </View>
        </View>
    )

}
const styles=StyleSheet.create({
    listContiner:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white'
    },
    image:{
      width: 80,
      height: 80,
      borderRadius:50
    },
    listContent:{
       marginLeft:10
    },
    title:{
        fontWeight:'700',
        fontSize:20
    },
    subtitle:{
        fontSize:16,
        color: 'gray'
    }

})
export default ListItem