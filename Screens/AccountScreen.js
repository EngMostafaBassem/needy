import React from 'react' 
import {View,StyleSheet,Text,FlatList,ScrollView} from 'react-native'
import Layout from '../Components/Shared/Layout'
import colorSchema from '../configs/color'
import ListItem from '../Components/Shared/ListItem'
import Icon from '../Components/Shared/Icon'
const AccountScreen=()=>{
    const data=[
        {
            id:1,
            title:'My Listing',
            iconName:'list-outline',
            bgColor:colorSchema.primary,
        },
        {
            id:2,
            title:'My Messages',
            iconName:'mail-open-outline',
            bgColor:colorSchema.seconday,
        },
    ]
    return(
        <View style={styles.container}>
            <Layout style={{marginHorizontal:0,marginTop:25}}>
               <ListItem title='Mosh Hamadani' 
                         subtitle='programmmingWithMoh@hotmail.com'
                         image={require('../assets/mosh.jpg')}
                         style={{marginBottom:50}}
                   /> 
               <View style={styles.listContainer}>
                <FlatList          
                 keyExtractor={item=>item.id.toString()}
                 data={data}
                 renderItem={({item})=>(
                    <ListItem 
                     title={item.title}
                     IconImage={ <Icon width={50} height={50} iconName={item.iconName} bgColor={item.bgColor}/>} 
                   /> 
                 )}
                 />  
               </View>
              
                  <ListItem 
                     title='Log Out'
                     IconImage={ <Icon width={50} height={50} iconName='log-out-outline' bgColor={colorSchema.warning}/>} 
                   /> 
            </Layout>
        </View>
    )

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colorSchema.bgColor
    },
    listContainer:{
        flexGrow:0,
        marginBottom:50
    }
})
export default AccountScreen