import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import BackWithHeaderComp from '../../component/BackWithHeaderComp'
import { cartIcon, menuIcon } from '../../constant/IconConst'
import { black_faint, border_color, header_color } from '../../constant/COLOR'
import { TextInput } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <BackWithHeaderComp
                StartUrl={menuIcon}
                EndUrl={cartIcon}
            />
            <Text style={styles.headerText}>Hello</Text>
            <Text style={styles.subHeaderText}>Welcome to Laza.</Text>

            <View style={styles.searchView}>
                <TextInput
                    style={{ backgroundColor: '#F5F6FA',width:'80%',borderRadius:10}}
                    underlineColor='transparent'
                    activeOutlineColor='transparent'
                    activeUnderlineColor='transparent'
                    placeholder='Search..'
                    left={<TextInput.Icon
                        icon={'magnify'}
                    />}
                />
                <TouchableOpacity style={styles.micButtonStyle}>
                    <Feather name="mic" color={'black'} size={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    headerText: {
        fontSize: 28,
        fontWeight: '500',
        color: header_color,
        marginTop: 5
    },
    subHeaderText: {
        fontSize: 15,
        color: black_faint,
    },
    searchView:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center'
    },
    micButtonStyle:{
        backgroundColor:'#9775FA',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:50
    }
})