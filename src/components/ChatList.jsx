import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcon'
import { ChatListData } from '../data/ChatListData'
import { useNavigation } from '@react-navigation/native'

const ChatList = () => {
    const navigation = useNavigation()
    return (
        <ScrollView>
            {
                ChatListData.map(item =>(
                    <TouchableOpacity onPress={()=>navigation.navigate('ChatScreen')} key={item.id} style={styles.container}>
                        <View style={styles.leftContainer}>
                            <Image source={item.profile} style={styles.userPhoto} />
                            <View>
                                <Text style={styles.userName}>{item.name}</Text>
                                <Text style={styles.message}>{item.message}</Text>
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.timeStamp}>{item.time}</Text>
                            {
                                item.mute && <VectorIcon
                                type="MaterialCommunityIcons"
                                name="volume-variant-off"
                                color={Colors.textGrey}
                                size={22}
                                style={styles.muteIcon}
                            />
                            }
                        </View>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}

export default ChatList

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12
    },
    userPhoto: {
        borderRadius: 50,
        height: 40,
        width: 40,
        marginRight: 15
    },
    userName: {
        color: Colors.textColor,
        fontSize: 16
    },
    message: {
        color: Colors.textGrey,
        marginTop: 5,

    },
    leftContainer: {
        flexDirection: 'row'
    },
    timeStamp: {
        color: Colors.textGrey,
        fontSize: 12
    },
    rightContainer: {
        alignItems: 'center'
    },
    muteIcon: {
        marginTop: 5,

    }
})