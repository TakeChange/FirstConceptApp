import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
const LikeIcon = () => {

    const [likeCondition, setLikeCondition] = useState(false);

    const changeValue = () => {
        setLikeCondition(!likeCondition)
    }

    return (
        <TouchableOpacity onPress={changeValue}>
            <AntDesign name={likeCondition ? 'heart' : 'hearto'} size={22} color={'red'} />
        </TouchableOpacity>
    )
}

export default LikeIcon;
const styles = StyleSheet.create({

})