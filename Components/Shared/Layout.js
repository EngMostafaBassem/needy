import React from 'react'
import {SafeAreaView,StyleSheet,Platform,View,StatusBar} from 'react-native'
import colorSchema from '../../configs/color'
const Layout=(props)=>{
    return(
        <SafeAreaView style={styles.safeAreaView}>
             <View style={[styles.contentView,props.style]}>
                {props.children}
             </View>
        </SafeAreaView>
    )

}
const styles=StyleSheet.create({
    safeAreaView:{
        flex:1,
        paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
      
    },
    contentView:{
        flex: 1,
        marginHorizontal:15
    }
})
export default Layout