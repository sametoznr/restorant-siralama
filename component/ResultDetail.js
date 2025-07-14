import { StyleSheet, Text, Image,View } from 'react-native'
import React from 'react'

export default function ResultDetail({result}) {
  return (
    <View style={styles.contan}>
        <Image style={{width:250,height:120,borderRadius:5,marginBottom:5,}}
        source={{uri:result.image_url}}/>
      <Text style={styles.nam}>{result.name}</Text>
      <Text>{result.rating} Yıldızlı Restorant, 
        {result.review_count} Değerlendirme
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
 contan:{
    marginLeft:6,
 },
 nam:{
    fontWeight:'bold',
 }


})