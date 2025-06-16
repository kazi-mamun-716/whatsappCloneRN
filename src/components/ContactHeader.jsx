import { Image, StyleSheet, Text, View } from 'react-native'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'
import { useNavigation } from '@react-navigation/native'

const ContactHeader = () => {
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
                <View>
                    <Text style={styles.selectContact}>Select Contact</Text>
                    <Text style={styles.contact}>23 Contacts</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <VectorIcon
                    type='Ionicons'
                    name='search'
                    color={Colors.white}
                    size={25}
                    style={styles.iconStyle}
                />
                <VectorIcon
                    type='Entypo'
                    name='dots-three-vertical'
                    color={Colors.white}
                    size={22}
                />
            </View>
        </View>
    )
}

export default ContactHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.primaryColor,
        padding: 12,
        alignItems: 'center',
    },
    leftContainer: {
        flexDirection: 'row'
    },
    selectContact: {
        fontSize: 17,
        color: Colors.white,
        marginLeft: 20
    },
    contact: {
        fontSize: 12,
        color: Colors.white,
        marginLeft: 20,
        marginTop: 5
    },
    rightContainer:{
        flexDirection: 'row',
        gap:15
    }
})