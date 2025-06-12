import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../theme/Colors'
import { ViewedStatusData } from '../data/ViewedStatusData'

const ViewedStatus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.viewedUpdatesTxt}>Viewed Status</Text>
      {
        ViewedStatusData.map(item => (
          <View style={styles.storySection} key={item.id}>
            <View style={styles.statusImgContainer}>
              <Image source={item.storyImg} style={styles.statusImg} />
            </View>
            <View style={styles.storyInfo}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.timeTxt}>{item.time}</Text>
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default ViewedStatus

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
  viewedUpdatesTxt: {
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