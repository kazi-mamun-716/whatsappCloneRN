import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../theme/Colors'
import User1 from '../assets/user1.jpeg'
import VectorIcon from '../utils/VectorIcon'
import { RecentCallsData } from '../data/RecentCallsData'

const RecentCalls = () => {
    return (
        <View>
            <Text style={styles.recentTxt}>Recent</Text>
            {
                RecentCallsData.map(item => (
                    <View key={item.id} style={styles.recentBodyContainer}>
                        <View style={styles.recentBodyLeftContainer}>
                            <Image source={item.profileImg} style={styles.userImg} />
                            <View style={styles.textContainer}>
                                <Text style={styles.callTxt}>{item.name}</Text>
                                <View style={styles.timeDateContainer}>
                                    {
                                        item.incoming && <VectorIcon
                                        name="arrow-down-left"
                                        type="Feather"
                                        size={20}
                                        color={Colors.red}
                                    />
                                    }
                                    {
                                        item.outgoing && <VectorIcon
                                        name="arrow-up-right"
                                        type="Feather"
                                        size={20}
                                        color={Colors.tertiary}
                                    />
                                    }
                                    <Text style={styles.shareTxt}>{item.time}</Text>
                                </View>
                            </View>
                        </View>
                        {
                            item.video && <VectorIcon
                            name="videocam"
                            type="Iconicons"
                            size={24}
                            color={Colors.tertiary}
                        />
                        }
                        {
                            item.audio && <VectorIcon
                            name="phone-alt"
                            type="FontAwesome5"
                            size={16}
                            color={Colors.tertiary}
                        />
                        }
                    </View>
                ))
            }
        </View>
    )
}

export default RecentCalls

const styles = StyleSheet.create({
    recentTxt: {
        fontSize: 14,
        color: Colors.textGrey,
        marginTop: 20,
        paddingBottom: 20
    },
    recentBodyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: Colors.textGrey
    },
    recentBodyLeftContainer: {
        flexDirection: 'row'
    },
    userImg: {
        height: 45,
        width: 45,
        borderRadius: 50
    },
    textContainer: {
        marginLeft: 15
    },
    callTxt: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: '500'
    },
    shareTxt: {
        fontSize: 13,
        color: Colors.textGrey,
        marginTop: 3
    },
    timeDateContainer: {
        flexDirection: 'row',
        gap: 2
    },
})