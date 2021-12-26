import React from 'react'
import {View,Text,ImageBackground,StyleSheet,Image} from 'react-native'
import Card from '../Components/Shared/Card'
import ListItem from '../Components/Shared/ListItem'
const ListingDetailsScreen=()=>{
    return(
         <View>   
             <Card title='Red Jacket for sale!' subtitle='$100' image={require('../assets/jacket.jpg')}/>
             <ListItem title='Mosh Hamadani' subtitle='5 Listing' image={require('../assets/mosh.jpg')}/>
         </View>
              
 )
}

export default ListingDetailsScreen