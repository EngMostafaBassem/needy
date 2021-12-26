import React from 'react'
import {View,Text,ImageBackground,StyleSheet,Image} from 'react-native'
import Button from '../Components/Shared/Button'
import Layout from '../Components/Shared/Layout'
import colorSchema from '../configs/color'
const WelcomeScreen=()=>{
 return(
    
            <ImageBackground source={require('../assets/background.jpg')} style={styles.imageBackground} blurRadius={5}>
                <Layout style={{justifyContent:'space-between'}}>
                   <View style={styles.logoContainer}>
                       <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                       <Text style={styles.logoText}>Sell What You Don't Need</Text>    
                   </View>
                 
                  <View style={styles.buttonContainer}>
                      <Button title='login'    bgColor={colorSchema.primary}/>
                      <Button title='register' bgColor={colorSchema.seconday}/>
                     
                  </View>
                </Layout>
              
          </ImageBackground>
    
   
 )
}
const styles=StyleSheet.create({
    imageBackground:{
        flex:1,      
    },
    logo:{
        width:100,
        height:100
    },
    logoContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    logoText:{
        fontWeight:'700',
        fontSize:20
    },
   
})
export default WelcomeScreen