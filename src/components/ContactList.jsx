import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ContactListData } from '../data/ContactListData'
import { Colors } from '../theme/Colors'

const ContactList = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contacts on whatsapp</Text>
      {
        ContactListData.map(item=><View style={styles.userContainer} key={item.id}>
            <Image source={item.userImg} style={styles.userImg} />
            <Text style={styles.userName}>{item.name}</Text>
        </View>)
      }
    </ScrollView>
  )
}

export default ContactList

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.background,
        padding: 16
    }, 
    title:{
        fontSize: 12,
        color: Colors.textGrey,
        marginBottom: 10
    },   
    userContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap:15,
        marginBottom: 10,
        paddingVertical: 12
    },
    userName:{
        color: Colors.textColor,
        fontSize: 16
    },
    userImg:{
        width: 40,
        height: 40,
        borderRadius: 50
    }
})