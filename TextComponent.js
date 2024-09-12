import { Alert, Button, Text, View } from "react-native"

const TextComponent = (props) => {

    const {title,color,onPress} = props;
    
    return (
        <View>
            <Button
                title={title}
                color={color}
                onPress={onPress}
            />
        </View>
    )
}

export default TextComponent