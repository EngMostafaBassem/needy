import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const ListItem=({title,subtitle,image,IconImage,...props})=>{
    return(
        <View style={[styles.listContiner,props.style]}>
          {IconImage}
          {
              image&&(<Image source={image} resizeMode='cover' style={styles.image}/>)
          }   
           <View style={styles.listContent}>
               <Text style={styles.title}   numberOfLines={1}>{title}</Text>
                {subtitle&&( <Text style={styles.subtitle}   numberOfLines={2}>{subtitle}</Text>)}            
           </View>
           <TouchableOpacity >
             <Ionicons name='chevron-forward-outline' size={20} color='gray'/>
           </TouchableOpacity>
          
        </View>
    )

}
const styles=StyleSheet.create({
    listContiner:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
      
    },
    image:{
      width: 80,
      height: 80,
      borderRadius:50
    },
    listContent:{
       marginLeft:10,
       marginRight:'auto'
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