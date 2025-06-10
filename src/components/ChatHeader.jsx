import { Image, StyleSheet, Text, View } from 'react-native'
import Profile from '../assets/user1.jpeg'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'
import { useNavigation } from '@react-navigation/native'

const ChatHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <VectorIcon
                    type="Ionicons"
                    name="arrow-back"
                    size={24}
                    color={Colors.white}
                    onPress={() => navigation.goBack()}
                />
                <Image source={Profile} style={styles.profilePhoto} />
                <Text style={styles.userName}>abul</Text>
            </View>
            <View style={styles.rightContainer}>
                <VectorIcon
                    type="Ionicons"
                    name="videocam"
                    size={22}
                    color={Colors.white}
                />
                <VectorIcon
                    type="Feather"
                    name="phone"
                    size={22}
                    color={Colors.white}
                    style={styles.phoneIcone}
                />
                <VectorIcon
                    type='Entypo'
                    name='dots-three-vertical'
                    color={Colors.secondaryColor}
                    size={22}
                />
            </View>
        </View>
    )
}

export default ChatHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.primaryColor,
        padding: 12,
        alignItems: 'center'
    },
    leftContainer: {
        flexDirection: 'row'
    },
    profilePhoto: {
        borderRadius: 50,
        height: 40,
        width: 40,
    },
    userName: {
        fontSize: 17,
        color: Colors.white,
        marginLeft: 10
    },
    rightContainer: {
        flexDirection: 'row'
    },
    phoneIcone:{
        marginHorizontal: 15
    }
})