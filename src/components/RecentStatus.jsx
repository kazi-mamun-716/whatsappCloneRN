import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../theme/Colors'
import { RecentStatusData } from '../data/RecentStatusData'
import FullModal from '../utils/FullModal'
import { useState } from 'react'

const RecentStatus = () => {
  const [showModal, setShowModal]= useState(false);
  const setTimeUp=( itemId )=>{
    setShowModal(prev=>({...prev, [itemId]: false}))
  }
  const ViewStatus=( itemId )=>{
    setShowModal(prev=>({...prev, [itemId]: true}))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.recentUpdatesTxt}>Recent updates</Text>
      {
        RecentStatusData.map(item => (
          <View key={item.id}>
            <TouchableOpacity onPress={()=>ViewStatus(item.id)}>
            <View style={styles.storySection}>
              <View style={styles.statusImgContainer}>
                <Image source={item.userImg} style={styles.statusImg} />
              </View>
              <View style={styles.storyInfo}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.timeTxt}>{item.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <FullModal 
            showStatusModal={showModal[item.id] || false} 
            setShowStatusModal={setShowModal}
            setTimeUp={()=>setTimeUp(item.id)}
            item={item}
          />
          </View>
        ))
      }
    </View>
  )
}

export default RecentStatus

const styles = StyleSheet.create({
  container: {},
  storySection: {
    flexDirection: 'row',
    marginTop: 15
  },
  statusImgContainer: {
    height: 50,
    width: 50,
    backgroundColor: Colors.background,
    borderColor: Colors.tertiary,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusImg: {
    height: 42,
    width: 42,
    borderRadius: 50
  },
  recentUpdatesTxt: {
    fontSize: 14,
    color: Colors.textGrey,
    paddingBottom: 10,
    paddingTop: 20
  },
  storyInfo: {
    marginLeft: 15
  },
  userName: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: '500'
  },
  timeTxt: {
    fontSize: 13,
    color: Colors.textGrey,
    marginTop: 3
  }
})