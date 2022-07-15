// 오른쪽에있는 도구상자에서 왼쪽에 있는 도구를 꺼내쓴다
// 비구조 할당 방식
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';

// 큰 함수 안에서 코드작성

// 함수를 밖으로 내보내겟당!
export default function App() {
  LogBox.ignoreLogs(['Warning: ...']); // logBox의 경고 무시
  return ( // 화면에서 보이는 결과!
    <View style={styles.container}>
      <Text style={styles.textStyle}>미니짱!!!ㅋlklkㅋㅋㅋ</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle : {
    color: 'teal'
  }
});