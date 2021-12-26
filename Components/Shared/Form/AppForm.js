import React from 'react'
import { View } from 'react-native'
import { Formik } from 'formik';
const AppForm=({initialValues,validationSchema,handleSubmit,...props})=>{
    return(
        <View>
            <Formik
              initialValues={initialValues}  
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
                {
                 ()=>(props.children)
                }
             
            </Formik>

        </View>
    )

}

export default AppForm