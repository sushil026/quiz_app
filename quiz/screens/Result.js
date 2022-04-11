import { StyleSheet, Text,Image, TouchableOpacity, View } from 'react-native'
import React from 'react'

const result = () => {
  return (
    <View>
     <View>
       <Text> RESULT</Text>
       <Image 
        source= {require('../components/res.png')}
        style= {styles.banner}
        resizeMode= "contain"
       />
       <TouchableOpacity>
         <Text>HOME</Text>
       </TouchableOpacity>
     </View>
    </View>
  )
}

export default result

const styles = StyleSheet.create({
  banner: {
    height: 300, width: 300,
 },
 bannerC: {
    justifyContent: 'center',
    alignItems: 'center'
 }
})