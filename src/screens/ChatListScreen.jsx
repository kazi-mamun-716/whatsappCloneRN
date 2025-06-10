import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ChatList from '../components/ChatList'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      <ChatList />
      <TouchableOpacity style={styles.chatBtn}>
        <VectorIcon
          type="MaterialCommunityIcons"
          name="message-reply-text"
          color={Colors.white}
          size={20}
        />      
      </TouchableOpacity>
    </View>
  )
}

export default ChatListScreen

const styles = StyleSheet.create({
  container:{
    position: 'relative',
    flex: 1,
    backgroundColor: Colors.background
  },
  chatBtn: {
    backgroundColor: Colors.tertiary,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20
  }
})