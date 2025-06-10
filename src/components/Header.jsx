import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import WhatsappLogo from '../assets/whatsapp-logo.png'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcon'

const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={WhatsappLogo} style={styles.logoStyle} />
            <View style={styles.headerIcons}>
                <VectorIcon
                    type='Feather'
                    name='camera'
                    color={Colors.secondaryColor}
                    size={22}
                />
                <VectorIcon
                    type='Ionicons'
                    name='search'
                    color={Colors.secondaryColor}
                    size={25}
                    style={styles.iconStyle}
                />
                <VectorIcon
                    type='Entypo'
                    name='dots-three-vertical'
                    color={Colors.secondaryColor}
                    size={22}
                />
            </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logoStyle: {
        height: 25,
        width: 110
    },
    headerIcons:{
        flexDirection: 'row',

    },
    iconStyle: {
        marginHorizontal: 25
    }
})