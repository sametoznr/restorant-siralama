import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function ResultScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    console.log(response.data);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return <Text>Yükleniyor...</Text>;

return (
  <View style={styles.container}>
    <Text style={styles.title}>{result.name}</Text>
    <Text style={styles.phone}>{result.phone}</Text>
   {

     result.is_closed ? (<FontAwesome5 style={{alignSelf:'center'}}
     name="door-closed" 
     size={30} color="red" /> ) : (
      <MaterialCommunityIcons 
      style={{alignSelf:'center'}} 
      name="door-open" size={30} color="green" />

     ) 
}



    {result.photos && result.photos.length > 0 ? (
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} 
           />
           
        )}
      />
    ) : (
      <Image style={styles.image} source={{ uri: result.image_url }} />
      
    )}
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf:'center',
    marginVertical:10,

  },
  phone: {
    fontSize: 16,
    marginBottom: 15,
    alignSelf:'center',
  },
  image: {
    
    height: 180,
    margin: 10,
    borderRadius: 5,
    
  },
});
