import React, { useState } from 'react' 
import {View,Text,StyleSheet, TouchableOpacity,Modal,FlatList} from 'react-native'
import colorSchema from '../../configs/color'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Button from './Button'

const AppPicker=({placeholder,value,handleSelect,data,...props})=>{
    const [modalVisible,setModalVisible]=useState(false)
    const onSelectChange=(id)=>{
        handleSelect(id)
        setModalVisible(!modalVisible)
    }
    const setValueText=(id)=>{
        return data.find(item=>item.id===id).value
    }
    return(
       <>
        <TouchableOpacity style={styles.container} onPress={()=>setModalVisible(!modalVisible)}>
            <View style={styles.textContainer}>
              <Ionicons name='list-outline' size={25} color='gray'/>
              <Text style={styles.text}>{value?setValueText(value):placeholder}</Text>
            </View>
            <Ionicons name='chevron-down-outline' size={20}/>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
         }}
      >
          <View style={styles.modalContainer}>
              <Button title='Close' bgColor={colorSchema.primary} onPress={()=>setModalVisible(!modalVisible)}/>
               {
                <FlatList
                 data={data}
                 keyExtractor={(item)=>item.id.toString()}
                 renderItem={({item})=>
                 (
                  <TouchableOpacity onPress={()=>onSelectChange(item.id)}>        
                     <Text style={styles.textSelect}>{item.value}</Text>               
                  </TouchableOpacity>   
                 )
                }
                />
               }
          </View>
          </Modal>
        </> 
    )

}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colorSchema.medium,
        height: 60,
        borderRadius:13,
        paddingHorizontal:10
    },
    textContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        color:'gray' ,
        fontSize:18,
    },
    modalContainer:{
        padding: 20,
        flex:1,
        backgroundColor:'white'

    },
    textSelect:{
        color: 'gray',
        fontSize:20,
        marginVertical:10,
        textAlign:'center'
    }

})
export default AppPicker