import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatHeader from '../components/ChatHeader'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'
import background from '../assets/wallpaper.jpeg'

const ChatScreen = () => {
  return (
    <>
      <ChatHeader />
      <ImageBackground source={background} style={styles.wallpaper}>
        <ChatBody />
      </ImageBackground>
      <ChatFooter />
    </>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  wallpaper:{
    flex:1,
    padding: 10
  }
})