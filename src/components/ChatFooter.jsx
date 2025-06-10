import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'

const ChatFooter = () => {
    const [message, setMessage] = useState('');
    const [sendEnable, setSendEnable] = useState(false);
    const onChange = (text) => {
        setMessage(text)
        setSendEnable(true)
    }
    const onSend = ()=>{
        setMessage('')
        setSendEnable(false);
        alert('sent clicked')
    }
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.row}>
                    <VectorIcon
                        name="emoji-emotions"
                        type="MaterialIcons"
                        size={20}
                        color={Colors.white}
                    />
                    <TextInput
                        placeholder='Message'
                        style={styles.textInput}
                        placeholderTextColor={Colors.textGrey}
                        onChangeText={(text) => onChange(text)}
                        multiline
                        value={message}
                        scrollEnabled
                        textAlignVertical='top'
                    />
                </View>
                <View style={styles.row}>
                    <VectorIcon
                        name="attachment"
                        type="Entrypo"
                        size={20}
                        color={Colors.white}
                    />
                    {
                        !sendEnable && <>
                            <VectorIcon
                                name="bangladeshi-taka-sign"
                                type="FontAwesome6"
                                size={20}
                                color={Colors.white}
                                style={{ marginHorizontal: 25 }}
                            />
                            <VectorIcon
                                name="camera"
                                type="FontAwesome5"
                                size={20}
                                color={Colors.white}
                            />
                        </>
                    }
                </View>
            </View>
            <View style={styles.rightContainer}>
                {
                    sendEnable ? <VectorIcon
                        name="send"
                        type="MaterialCommunityIcons"
                        size={25}
                        color={Colors.white}
                        onPress={onSend}
                    /> : <VectorIcon
                        name="microphone"
                        type="MaterialCommunityIcons"
                        size={25}
                        color={Colors.white}
                    />
                }

            </View>

        </View>
    )
}

export default ChatFooter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.black,
        paddingVertical: 12,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        fontSize: 17,
        color: Colors.white,
        marginLeft: 5,
        maxHeight:100,
    },
    leftContainer: {
        width: '85%',
        flexDirection: 'row',
        backgroundColor: Colors.primaryColor,
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightContainer: {
        backgroundColor: Colors.teal,
        padding: 10,
        borderRadius: 50
    }
})