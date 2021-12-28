import React from 'react' 
import {View,StyleSheet } from 'react-native'
import {useFormikContext} from 'formik'
import AppPicker from '../AppPicker'
import AppFormError from './AppFormError'
const AppFormPicker=({name,...props})=>{
    const {values,setFieldValue,handleBlur,errors,touched}=useFormikContext()
    const handleSelect=(val)=>setFieldValue('category',val)
    return(
        <View style={styles.container}>
            <AppPicker 
             value={values[`${name}`]}
             handleSelect={handleSelect}
             onBlur={handleBlur(`${name}`)}
             { ...props }
                      
            />
             {
              touched[`${name}`]&& errors[`${name}`]&&( <AppFormError error={errors[`${name}`]}/>)
             }
        </View>
    )

}
const styles=StyleSheet.create({
    container:{
        marginVertical:10
    }
})
export default AppFormPicker