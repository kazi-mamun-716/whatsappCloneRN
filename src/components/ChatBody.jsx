import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcon'
import { MessagesData } from '../data/MessageData'

const ChatBody = () => {
  const scrollViewRef = useRef();
  const userId = '1jdfnvchjkd'
  const UserMessageView = ({msg, time})=>{
    return (
      <View style={styles.userContainer}>
        <View style={styles.userMessage}>
          <Text style={styles.msgTxt}>{msg}</Text>
          <Text style={styles.msgTime}>{time}</Text>
          <VectorIcon 
            name="check-double"
            type="FontAwesome5"
            size={12}
            color={Colors.blue}
            style={styles.doubleCheck}
          />
        </View>
      </View>
    )
  }
  const OtherUserMessageView = ({msg, time})=>{
    return (
      <View style={styles.otherContainer}>
        <View style={styles.otherMessage}>
          <Text style={styles.msgTxt}>{msg}</Text>
          <Text style={styles.msgTime}>{time}</Text>
        </View>
      </View>
    )
  }
  const scrollToBottom=()=>{
    scrollViewRef.current.scrollToEnd({animated: true})
  }
  return (
    <>
      <ScrollView 
      ref={scrollViewRef}
      showsVerticalScrollIndicator={false} 
      onContentSizeChange={scrollToBottom}
    >
      {
        MessagesData.map(item=>(
          <>
          {
            item.id === userId ? (
              <UserMessageView msg={item.message} time={item.time} />
            ):(
              <OtherUserMessageView msg={item.message} time={item.time} />
            )
          }
          </>
        ))
      }
      
    </ScrollView>
    <View style={styles.bottomIcon}>
      <VectorIcon 
      name="angle-dobule-down"
      type="Fontisto"
      size={12}
      color={Colors.white}
    />
    </View>
    </>
  )
}

export default ChatBody

const styles = StyleSheet.create({
  userContainer:{
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginVertical:5
  },
  otherContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  userMessage:{
    backgroundColor: Colors.teal,
    paddingVertical: 8,
    paddingHorizontal:15,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  msgTxt:{
    fontSize: 13,
    color: Colors.white
  },
  msgTime:{
    fontSize: 9,
    color: Colors.white,
    marginLeft: 5
  },
  doubleCheck:{
    marginLeft: 5
  },
  otherMessage:{
    backgroundColor: Colors.primaryColor,
    paddingVertical: 8,
    paddingHorizontal:15,
    borderTopRightRadius: 30,
    borderBottomRightRadius:30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  bottomIcon:{
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    height:30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
})