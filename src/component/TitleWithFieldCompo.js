import { StyleSheet, Text, TextInput, View } from "react-native";

const TitleWithFieldCompo = ({ title, placeholder, getText, keyboardType,maxLength }) => {

    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <TextInput
                style={styles.inputStyle}
                placeholder={placeholder}
                onChangeText={getText}
                keyboardType={keyboardType}
                placeholderTextColor={'#9E9997'}
                maxLength={maxLength}
            ></TextInput>
        </View>
    )
}

export default TitleWithFieldCompo;

const styles = StyleSheet.create({
    titleStyle: {
        color: 'black',
        fontSize: 22,
        marginTop: 5,
        marginBottom: 5
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        color: 'black',
        fontSize: 20
    }
})