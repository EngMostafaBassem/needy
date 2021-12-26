import React from 'react'
import Layout from '../Components/Shared/Layout'
import {FlatList,View,StyleSheet} from 'react-native'
import Card from '../Components/Shared/Card'
import Icon from '../Components/Shared/Icon'
import colorSchema from '../configs/color'
import ListItem from '../Components/Shared/ListItem'
const ListingScreen=()=>{
    const data=[
        {
            id:1,
            imageUrl:require('../assets/jacket.jpg'),
            title:'Red Jacket for sale',
            price:'$100'
        },
        {
            id:2,
            imageUrl:require('../assets/couch.jpg'),
            title:'Couch in a great condition',
            price:'$1000'
        },
    ]
    return(
        <View style={styles.container} >
          <Layout >
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              keyExtractor={item=>item.id.toString()}
              renderItem={({item})=><Card title={item.title} subtitle={item.price} image={item.imageUrl} 
              />
            }
            />
        </Layout>
        </View>
     
    )

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colorSchema.bgColor

    }
})
export default ListingScreen