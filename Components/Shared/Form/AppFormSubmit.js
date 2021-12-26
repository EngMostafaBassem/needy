import React from 'react'
import{View,Text} from 'react-native'
import colorSchema from '../../../configs/color'
import Button from '../Button'
import {useFormikContext} from 'formik'
const AppFormSubmit=({title})=>{
    const {handleSubmit}=useFormikContext()
    return(
        <View>
            <Button title={title} bgColor={colorSchema.primary} onPress={handleSubmit} />
        </View>
    )

}
export default AppFormSubmit