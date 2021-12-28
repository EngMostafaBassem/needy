import React, { useState } from 'react' 
import {View,Text,StyleSheet, TouchableOpacity,Modal,FlatList} from 'react-native'
import colorSchema from '../../configs/color'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Button from './Button'

const Option=({item,onPress})=>{
    const customTextStyles={
        marginVertical:10,
        width: '100%',
        fontSize:18
    }
    return(
        <TouchableOpacity onPress={onPress} >
            {
               item?.icon&&(
                 <View style={[styles.optionContainer,{backgroundColor:item.backgroundColor}]}>
                    <Ionicons name={item.icon} size={30} color='white'/> 
                  </View>
                )
            }    
            <Text style={ item?.icon?styles.textSelect:customTextStyles}>{item.label}</Text>
        </TouchableOpacity>
    )
}

const AppPicker=({placeholder,value,handleSelect,data,width='100%',numColumns})=>{
    const [modalVisible,setModalVisible]=useState(false)
    const onSelectChange=(value)=>{
        handleSelect(value)
        setModalVisible(!modalVisible)
    }
    const setValueText=(value)=>{
        return data.find(item=>item.value===value).label
    }
    return(
       <>
        <TouchableOpacity style={[styles.container,{width}]} onPress={()=>setModalVisible(!modalVisible)}>
            <View style={styles.textContainer}>
                {!value&&(<Ionicons name='list-outline' size={25} color='gray'/>)}
             
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
                 numColumns={numColumns}
                 data={data}
                 keyExtractor={(item)=>item.value.toString()}
                 renderItem={({item})=>
                 (<Option item={item} onPress={()=>onSelectChange(item.value)}/>) 
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
        backgroundColor:'white',
        alignItems:'center'

    },
    textSelect:{
        color: 'gray',
        fontSize:18,
        textAlign:'center',
        width: 120
       
    },
 
        optionContainer:{
            height: 100,
            width: 100,
            borderRadius:50,
            backgroundColor:'red',
            justifyContent:'center',
            alignItems:'center',
            marginHorizontal:5,
            marginVertical:15
         
        }

    

})
export default AppPicker