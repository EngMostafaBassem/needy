import React from 'react' 
import {View,Text} from 'react-native'
import {AppForm,AppFormField,AppFormSubmit} from '../Components/Shared/Form'
import Layout from '../Components/Shared/Layout'
import * as yup from 'yup';
const RegisterScreen=()=>{
    const handleSubmit=(values)=>{
        console.log('values to be submitted',values)
    }
    let validationSchema = yup.object().shape({  
        name: yup.string().required().label('Name').min(3),
        email: yup.string().email().required().label('Email'),
        password:yup.string().min(6,({min})=>'Password should be min of 6 characters').label('Password').required()  
      });
    return(
        <Layout>
        <AppForm
          initialValues={{name:'',email:'',password:''}}
          validationSchema={validationSchema}
          handleSubmit={handleSubmit}>
              
            <AppFormField 
              placeholder='Name'
              keyboardType='default'
              iconText='person-outline'
              name='name'
            />
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
            <AppFormSubmit title='Register'/>
        </AppForm>
    </Layout>
    )

}
export default  RegisterScreen