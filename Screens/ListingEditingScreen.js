import React, { useState } from 'react' 
import { View,Text } from 'react-native'
import {AppForm,AppFormField,AppFormSubmit} from '../Components/Shared/Form'
import Layout from '../Components/Shared/Layout'
import * as yup from 'yup';
import AppPicker from '../Components/Shared/AppPicker';

const ListingDetailsScreen=()=>{
    const[value,setValue]=useState(null)
    const handleSubmit=(values)=>{
        console.log('values to be submitted',values)
    }
    let validationSchema = yup.object().shape({  
        title: yup.string().required().min(3).label('Title'),
        price: yup.number().positive().integer().required().min(1).max(10000).label('Price'),
        description:yup.string().optional().label('Description')
      });
      const categories=[{id:1,value:'Furniture'},{id:2,value:'Books'},{id:3,value:'Electronics'}]
      const handleSelect=(id)=>{
        setValue(id)
      }
  return(
    <Layout>
   
     <AppForm
      initialValues={{title:'',price:'',description:''}}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}>      
        <AppFormField 
          placeholder='Title'
          keyboardType='default'
          name='title'
        />
         <AppFormField 
          placeholder='Price'
          keyboardType='numeric'
          name='price'
        />
          <AppPicker 
           handleSelect={handleSelect}
           placeholder='Categories' 
           value={value}
           data={categories}/>

          <AppFormField 
           placeholder='Description'
           keyboardType='default'
           placeholder='description'
        />
        <AppFormSubmit title='post'/>
    </AppForm>
</Layout>
  )
} 
export default ListingDetailsScreen