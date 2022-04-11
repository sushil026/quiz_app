import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Title from '../components/Title'
const home = () => {
  return (
    <View>
       <Title/>
       <View style= {styles.bannerC}>
          <Image source={require('../components/home.png')}
          style= {styles.banner}
          resizeMode= "contain"
          />
       </View>
       <TouchableOpacity>
          <Text>START</Text>
       </TouchableOpacity>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
   banner: {
      height: 300, width: 300,
   },
   bannerC: {
      justifyContent: 'center',
      alignItems: 'center'
   }
})