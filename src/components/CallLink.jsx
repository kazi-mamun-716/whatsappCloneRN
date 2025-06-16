import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'

const CallLink = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <VectorIcon 
        name="link"
        type="Fontisto"
        size={20}
        color={Colors.white}
      />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.callTxt}>Create call link</Text>
        <Text style={styles.shareTxt}>Share a link for your Whatsapp call</Text>
      </View>
    </View>
  )
}

export default CallLink

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    iconContainer:{
        backgroundColor: Colors.tertiary,
        height: 45,
        width: 45,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer:{
        marginLeft: 15
    },
    callTxt:{
        fontSize: 15,
        color: Colors.white,
        fontWeight: '500'
    },
    shareTxt: {
        fontSize: 13,
        color: Colors.textGrey,
        marginTop: 3
    }
})