import React, { useState } from 'react' 
import { View,Text } from 'react-native'
import {AppForm,AppFormField,AppFormSubmit} from '../Components/Shared/Form'
import Layout from '../Components/Shared/Layout'
import * as yup from 'yup';
import AppFormPicker from '../Components/Shared/Form/AppFormPicker';

const ListingDetailsScreen=()=>{
   
    const handleSubmit=(values)=>{
        console.log('values to be submitted',values)
    }
    let validationSchema = yup.object().shape({  
        title: yup.string().required().min(3).label('Title'),
        price: yup.number().positive().integer().required().min(1).max(10000).label('Price'),
        category:yup.number().required().typeError('Please choose correct value for category'),
        description:yup.string().optional().label('Description')
      });

      const categories = [
        {
          backgroundColor: "#fc5c65",
          icon: "wine-outline",
          label: "Furniture",
          value: 1,
        },
        {
          backgroundColor: "#fd9644",
          icon: "car",
          label: "Cars",
          value: 2,
        },
        {
          backgroundColor: "#fed330",
          icon: "camera",
          label: "Cameras",
          value: 3,
        },
        {
          backgroundColor: "#26de81",
          icon: "game-controller-outline",
          label: "Games",
          value: 4,
        },
        {
          backgroundColor: "#2bcbba",
          icon: "shirt-outline",
          label: "Clothing",
          value: 5,
        },
        {
          backgroundColor: "#45aaf2",
          icon: "basketball",
          label: "Sports",
          value: 6,
        },
        {
          backgroundColor: "#4b7bec",
          icon: "musical-notes-outline",
          label: "Movies & Music",
          value: 7,
        },
        {
          backgroundColor: "#a55eea",
          icon: "book-outline",
          label: "Books",
          value: 8,
        },
        {
          backgroundColor: "#778ca3",
          icon: "apps-outline",
          label: "Other",
          value: 9,
        },
      ];

     /*
      const categories = [
        {
         
          label: "Furniture",
          value: 1,
        },
        {
        
          label: "Cars",
          value: 2,
        },
        {
        
          label: "Cameras",
          value: 3,
        },
        {
        
          label: "Games",
          value: 4,
        },
        {
        
          label: "Clothing",
          value: 5,
        },
        {
         
          label: "Sports",
          value: 6,
        },
        {
         
          label: "Movies & Music",
          value: 7,
        },
        {
         
          label: "Books",
          value: 8,
        },
        {
         
          label: "Other",
          value: 9,
        },
      ];
      */
      
  return(
    <Layout>
     <AppForm
      initialValues={{title:'',price:'',description:'',category:null}}
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
          width={120}
        />
         <AppFormPicker
          placeholder='Categories' 
          data={categories}
          name='category'
          width='50%'
          numColumns={3}
        />
          <AppFormField 
           placeholder='Description'
           keyboardType='default'
           name='description'
        />
        <AppFormSubmit title='post'/>
    </AppForm>
</Layout>
  )
} 
export default ListingDetailsScreen