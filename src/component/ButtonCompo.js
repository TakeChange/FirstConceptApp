import { View, Text, Button } from 'react-native'
import React from 'react'

const ButtonCompo = ({ title, color,click }) => {
    return (
        <View>
            <Button
                title={title}
                color={color}
                onPress={click}
            ></Button>
        </View>
    )
}

export default ButtonCompo