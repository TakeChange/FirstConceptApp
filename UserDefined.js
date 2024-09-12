import { Text, View,Button } from "react-native";

const UserDefined = ({title,color,disabled,onPress}) =>{

    return(
        <View style={{margin:10}}>
            <Button
                title={title}
                color={color}
                disabled={disabled}
                onPress={onPress}
            />
        </View>
    )
}

export default UserDefined;