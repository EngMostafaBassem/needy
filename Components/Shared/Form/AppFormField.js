import React from 'react' 
import AppField from '../AppField'
import {useFormikContext} from 'formik'
import {View,StyleSheet,Text} from 'react-native'

const AppFormField=({name,...props})=>{
    const {handleChange,handleBlur,errors,values,touched}=useFormikContext()

    return(
        <View style={styles.container}>
            <AppField
             value={values[name]}
             onChangeText={handleChange(`${name}`)}
             onBlur={handleBlur(`${name}`)}
             name={name}
             { ...props}
            />
             {
               touched[`${name}`]&&errors[`${name}`]&&( <AppFormError error={errors[`${name}`]}/>)
             }
           
        </View>
    )

}
const styles=StyleSheet.create({
    container:{
        marginVertical:10
    }
})
export default AppFormField