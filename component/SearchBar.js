import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

export default function SearchBar({onTermSubmit,onTermChange,term}) {
  return (
    <View style={styles.background}>
     <Feather style={styles.icons} name="search" size={30} color="black" />
     <TextInput placeholder="Ara" 
     style={styles.inputstyle} 
     autoCapitalize='none'

     onChangeText={onTermChange}
     onEndEditing={onTermSubmit}
     value={term}
     />
    </View>
  )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: 'lightgray',
        flexDirection:'row',
        margin:10,
        height:50,
        alignItems:'center',
        borderRadius:6,

    },
    icons:{
        marginHorizontal: 15,

    },
    inputstyle:{
            flex:1,
            fontSize:18,
    },
})