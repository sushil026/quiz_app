import { StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const quiz = () => {
  return (
    <View style={styles.container}>
     <View style={styles.ques}>
       <Text>Question for u</Text>
     </View>
     <View style={styles.options}>
       <TouchableOpacity>
         <Text>Option 1</Text>
       </TouchableOpacity>
       <TouchableOpacity>
         <Text>Option 2</Text>
       </TouchableOpacity>
       <TouchableOpacity>
         <Text>Option 3</Text>
       </TouchableOpacity>
       <TouchableOpacity>
         <Text>Option 4</Text>
       </TouchableOpacity>
     </View>
     <View style={styles.bottom}>
       <TouchableOpacity>
         <Text> SKIP </Text>
       </TouchableOpacity>
       <TouchableOpacity>
         <Text> NEXT </Text>
       </TouchableOpacity>
     </View>
    </View>
  )
}

export default quiz

const styles = StyleSheet.create({
  container:{
    padding: 12,
    marginVertical: 16,
    height: "100%",
  },
  ques: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 50,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})