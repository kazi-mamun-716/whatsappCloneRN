import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContactHeader from '../components/ContactHeader'
import ContactList from '../components/ContactList'

const ContactScreen = () => {
  return (
    <View>
      <ContactHeader />
      <ContactList />
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({})