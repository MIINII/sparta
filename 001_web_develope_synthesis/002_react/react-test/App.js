import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style='auto' />
      <Text style={styles.h1}>나만의 꿀팁</Text>
      <Image
        source={{ url: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c' }}
        resizeMode={'cover'}
        style={styles.ImageStyle}></Image>
      <ScrollView style={styles.scrollView} horizontal>
        <TouchableOpacity style={styles.buttonStyle1}>
          <Text style={styles.textStyle}>미용</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle2}>
          <Text style={styles.textStyle}>재태크</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle3}>
          <Text style={styles.textStyle}>꿀팁</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle4} backgroundColor={'red'}>
          <Text style={styles.textStyle}>샤샥</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.pizzaSection}>
        <View style={styles.pizzaCard}>
          <Image
            source={{ url: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3' }}
            resizeMode={'cover'}
            style={styles.pizzaImage}></Image>
          <View style={styles.pizzaeDesc}>
            <Text style={styles.pizzaH1}>먹다남은 피자를 촉촉하게!</Text>
            <Text style={styles.pizzaP} numberOfLines={3}ellipsizeMode='tail'>
              먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이
              전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.
            </Text>
            <Text style={styles.Date}>2022.07.15</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  h1: {
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: '700',
    fontSize: '28',
    color: '#333',
  },
  textStyle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    padding: 15,
  },
  ImageStyle: {
    width: '90%',
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: '30px',
  },
  scrollView: {
    marginTop: 20,
    marginLeft: 10,
    height: 60,
  },
  buttonStyle1: {
    width: 100,
    height: 50,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'teal',
  },
  buttonStyle2: {
    width: 100,
    height: 50,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'rgb(169,218,7)',
  },
  buttonStyle3: {
    width: 100,
    height: 50,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'rgb(255,103,204)',
  },
  buttonStyle4: {
    width: 100,
    height: 50,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'rgb(231,218,40)',
  },
  pizzaSection: {
    marginTop: 10,
    marginLeft: 10,
  },
  pizzaCard: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  pizzaImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  pizzaeDesc: {
    flex: 2,
    flexDirection: 'column',
    marginLeft: 10,
  },
  pizzaH1: {
    fontSize: 22,
    fontWeight: '700',
    // adjustsFontSizeToFit: true,
  },

  pizzaP: {
    marginTop: 5,
    fontSize: '15',
  },
  Date: {
    fontSize: 10,
    color: '#ccc',
  },
})
