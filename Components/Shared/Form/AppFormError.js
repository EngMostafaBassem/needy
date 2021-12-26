import React from 'react' 
import {View,Text,StyleSheet} from 'react-native'
const AppFormError=({error})=>{
    return(
        <View >
            <Text style={styles.error}>{error}</Text>
        </View>
    )
    
}
const styles=StyleSheet.create({
    error:{
        fontWeight:'600',
        color:'red'
    }
})
export default AppFormError