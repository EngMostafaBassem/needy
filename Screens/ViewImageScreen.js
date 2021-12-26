import React from 'react'
import Layout from '../Components/Shared/Layout'
import {StyleSheet,Text,TouchableOpacity,View,Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const ViewImageScreen=()=>{
    return(
        <View style={styles.container}>
           <Layout style={{marginHorizontal:0}}>     
               <View style={styles.content}>
                   <View style={styles.btnContainer}>
                       <TouchableOpacity><Ionicons name='close-outline' color='white' size={50}/></TouchableOpacity>
                       <TouchableOpacity><Ionicons name='trash-outline' color='white' size={50}/></TouchableOpacity>
                   </View>
                   <Image source={require('../assets/chair.jpg')} style={styles.image} resizeMode='contain'/>
               </View>

          </Layout>
        </View>
      
    )

}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1
    },
    content:{
        flex:1
    },
    btnContainer:{
        marginHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image:{
        width:'100%',
        height: '100%'
    }
    

})
export default ViewImageScreen