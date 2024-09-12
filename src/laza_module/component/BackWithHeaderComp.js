import { View, Text, StyleSheet, Image } from "react-native"


const BackWithHeaderComp = ({ StartUrl, HeaderText, EndUrl }) => {

    return (
        <View style={styles.container}>
            {StartUrl != null ?
                <Image
                    source={StartUrl}
                />
                :
                null
            }
            <Text style={styles.header}>{HeaderText}</Text>
            {EndUrl != null ?
                <Image
                    source={EndUrl}
                />
                :
                null
            }
        </View>
    )
}

export default BackWithHeaderComp
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#1D1E20',
        fontWeight: '700'
    }
})