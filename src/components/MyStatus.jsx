import { Image, StyleSheet, Text, View } from 'react-native'
import Profile from '../assets/user1.jpeg'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcon'

const MyStatus = () => {
    return (
        <View style={styles.container}>
            <Image source={Profile} style={styles.profileImg} />
            <View style={styles.addIcon}>
                <VectorIcon 
                name="pluscircle"
                type="AntDesign"
                size={20}
                color={Colors.tertiary}
            />
            </View>
            <View style={styles.statusContainer}>
                <Text style={styles.myStatusTxt}>My Status</Text>
                <Text style={styles.addStatusTxt}>Tap to add status update</Text>
            </View>
        </View>
    )
}

export default MyStatus

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

    },
    profileImg: {
        borderRadius: 50,
        height: 45,
        width: 45,
        position: 'relative'
    },
    addIcon:{
        backgroundColor: Colors.white,
        height: 20,
        width: 20,
        borderRadius: 50,
        position: 'absolute',
        bottom: 0,
        left: 28
    },
    statusContainer:{
        marginLeft: 15
    },
    myStatusTxt: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: '500'
    },
    addStatusTxt: {
        fontSize: 13,
        color: Colors.textGrey,
        marginTop: 3
    }
})