import React from 'react'
import { View,Text,Image,StyleSheet } from 'react-native'
import {AppForm,AppFormField,AppFormSubmit} from '../Components/Shared/Form'
import Layout from '../Components/Shared/Layout'
import * as yup from 'yup';
const LoginScreen=()=>{
    const handleSubmit=(values)=>{
        console.log('values to be submitted',values)
    }
    let validationSchema = yup.object().shape({  
        email: yup.string().email().required().label('Email'),
        password:yup.string().min(6,({min})=>'Password should be min of 6 characters').label('Password').required()  
      });
    return(
        <Layout>
            <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
            <AppForm
              initialValues={{email:'',password:''}}
              validationSchema={validationSchema}
              handleSubmit={handleSubmit}>
                 <AppFormField 
                  placeholder='Email'
                  keyboardType='email-address'
                  iconText='mail-outline'
                  name='email'
                />
                  <AppFormField 
                   placeholder='Password'
                   keyboardType='numeric'
                   iconText='lock-closed-outline'
                   name='password'
                />
                <AppFormSubmit title='login'/>
            </AppForm>
        </Layout>
    )

}
const styles=StyleSheet.create({
    logo:{
        width:100,
        height:100,
        alignSelf:'center',
        marginVertical:50
    },
})
export default LoginScreen